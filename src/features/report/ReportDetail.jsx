import { useNavigate, useParams } from 'react-router-dom';
import MapBox from '../report/MapBox';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Spinner from '../../ui/Spinner';
import { useReport } from '../../features/report/useReport';
import toast from 'react-hot-toast';
import { useDeleteReport } from '../../features/report/useDeleteReport';
import MiniSpinner from '../../ui/MiniSpinner';
import { useUser } from '../../features/authentication/useUser';
import { useEffect, useState } from 'react';
import { useChangeStatus } from '../../features/report/useChangeStatus';

const ReportDetail = () => {
  const navigate = useNavigate();
  const { reportId } = useParams();
  const { report, isLoading, error } = useReport();
  const { deleteReport, isLoading: isDeleting } = useDeleteReport();
  const { user } = useUser();
  const { changeStatus, isPending } = useChangeStatus();

  const [location, setLocation] = useState(
    report?.location || { lat: null, long: null },
  );

  useEffect(() => {
    if (report?.location) {
      try {
        const parsedLocation = JSON.parse(report?.location);
        setLocation(parsedLocation); // Set the location if valid
      } catch (error) {
        console.log(error);
        setLocation({ lat: null, long: null });
      }
    }
  }, [report]);

  if (isLoading) return <Spinner />;
  if (error) toast.error(error.message);

  if (!report) {
    return (
      <div className="flex h-screen items-center justify-center">
        Report not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="rounded-lg bg-white p-6 shadow">
        <h1 className="mb-4 text-3xl font-semibold">{report.title}</h1>

        <p className="mb-2 text-gray-500">
          <strong>Description:</strong> {report.description}
        </p>

        <p className="mb-2 text-gray-500">
          <strong>Record Type:</strong>{' '}
          <span
            className={`rounded px-2 py-1 ${
              report.recordType === 'red-flag'
                ? 'bg-red-100 text-red-700'
                : 'bg-green-100 text-green-700'
            }`}
          >
            {report.recordType === 'red-flag' ? 'Red-Flag' : 'Intervention'}
          </span>
        </p>

        <p className="mb-2 text-gray-500">
          <strong>Status:</strong>{' '}
          <span
            className={`rounded px-2 py-1 ${
              report.status === 'resolved'
                ? 'bg-[#0088FE] text-white'
                : report.status === 'pending' ||
                    report.status === 'investigating'
                  ? 'bg-[#FFBB28] text-white'
                  : 'bg-[#FF8042] text-white'
            }`}
          >
            {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
          </span>
        </p>

        {user.isAdmin && (
          <p className="mb-2 text-gray-500">
            <strong>Reporter:</strong> {report?.createdBy?.firstname}{' '}
            {report?.createdBy?.lastname}
          </p>
        )}

        <div className="mb-4">
          <strong>Images:</strong>
          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {report.images.length > 0 ? (
              report.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Report Image ${index + 1}`}
                  className="h-40 w-full rounded object-cover"
                />
              ))
            ) : (
              <p>No images available.</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <strong>Videos:</strong>
          <div className="mt-2">
            {report.videos.length > 0 ? (
              report.videos.map((video, index) => (
                <video key={index} controls className="h-auto w-full rounded">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))
            ) : (
              <p>No videos available.</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <strong>Location:</strong>
          {location.lat && location.long ? (
            <div>
              <p>
                Latitude: {location.lat}, Longitude: {location.long}
              </p>
              <MapBox
                location={{
                  lat: location.lat,
                  long: location.long,
                }}
              />
            </div>
          ) : (
            <p>No location available.</p>
          )}
        </div>

        <div className="mt-4 flex justify-end space-x-4">
          <Modal>
            {user?.isAdmin && (
              <>
                {report?.status === 'pending' && (
                  <Button
                    variation="investigate"
                    onClick={() =>
                      changeStatus({ reportId, value: 'investigating' })
                    }
                  >
                    {isPending ? <MiniSpinner /> : 'Investigate'}
                  </Button>
                )}
                {report?.status === 'investigating' && (
                  <Button
                    disabled={isPending}
                    variation="resolve"
                    onClick={() =>
                      changeStatus({ reportId, value: 'resolved' })
                    }
                  >
                    {isPending ? <MiniSpinner /> : 'Resolve'}
                  </Button>
                )}

                {report?.status === 'investigating' && (
                  <Button
                    disabled={isPending}
                    variation="reject"
                    onClick={() =>
                      changeStatus({ reportId, value: 'rejected' })
                    }
                  >
                    {isPending ? <MiniSpinner /> : 'Reject'}
                  </Button>
                )}
              </>
            )}
            {!user?.isAdmin && report?.status === 'pending' && (
              <Button onClick={() => navigate(`/report/edit/${reportId}`)}>
                Edit
              </Button>
            )}
            {!user?.isAdmin && report?.status !== 'investigating' && (
              <Modal.Open opens="delete">
                <Button variation="danger">
                  {isDeleting ? <MiniSpinner /> : 'Delete'}
                </Button>
              </Modal.Open>
            )}
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="report"
                disabled={isDeleting}
                onConfirm={() => deleteReport(reportId)}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;
