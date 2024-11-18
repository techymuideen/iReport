import Profile1 from '../../public/img/user-18.jpg';
import Profile2 from '../../public/img/user-5c8a1f292f8fb814b56fa184-1557847261269.jpeg';
import Profile3 from '../../public/img/user-6.jpg';

const AboutUs = () => {
  return (
    <div className='bg-gray-100 min-h-screen py-8'>
      {/* Header */}
      <header className='text-center mb-8'>
        <h1 className='text-4xl font-bold text-gray-800'>About Us</h1>
        <p className='text-lg text-gray-600 mt-2'>
          Learn more about iReporter and our mission.
        </p>
      </header>

      {/* Introduction */}
      <section className='max-w-4xl mx-auto px-4 mb-12'>
        <h2 className='text-3xl font-semibold text-gray-800 mb-4'>
          Our Mission
        </h2>
        <p className='text-lg text-gray-700'>
          At iReporter, our mission is to empower communities by giving
          individuals a platform to report issues and incidents in their
          neighborhoods. Whether it is a pothole, illegal dumping, or public
          safety concerns, we aim to make it easier for citizens to raise their
          voices and get results. We believe in a better, safer world where
          people can actively participate in creating change.
        </p>
      </section>

      {/* Features */}
      <section className='bg-grey-100 py-8'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-semibold text-gray-800 mb-8'>
            Key Features
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-gray-50 p-6 rounded-md shadow-md'>
              <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
                Report Issues
              </h3>
              <p className='text-lg text-gray-700'>
                Quickly submit reports for any incidents or issues in your
                community. Our app allows users to easily capture and send
                photos and descriptions.
              </p>
            </div>
            <div className='bg-gray-50 p-6 rounded-md shadow-md'>
              <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
                Track Reports
              </h3>
              <p className='text-lg text-gray-700'>
                Keep track of your reports, receive updates on their status, and
                get notified when your issue is addressed.
              </p>
            </div>
            <div className='bg-gray-50 p-6 rounded-md shadow-md'>
              <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
                Community Feedback
              </h3>
              <p className='text-lg text-gray-700'>
                Stay informed and engage with others in your community. You can
                see what issues have been reported in your area and comment on
                them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className='max-w-4xl mx-auto px-4 my-12'>
        <h2 className='text-3xl font-semibold text-gray-800 text-center mb-8'>
          Meet Our Team
        </h2>
        <div className='flex flex-wrap justify-center gap-12'>
          <div className='w-64 text-center flex flex-col items-center'>
            <img
              src={Profile1}
              alt='Team Member'
              className='rounded-full mb-4 h-[10rem] w-[10rem]'
            />
            <h3 className='text-xl font-semibold text-gray-800'>John Doe</h3>
            <p className='text-gray-600'>CEO & Founder</p>
          </div>
          <div className='w-64 text-center flex flex-col items-center'>
            <img
              src={Profile2}
              alt='Team Member'
              className='rounded-full mb-4 h-[10rem] w-[10rem]'
            />
            <h3 className='text-xl font-semibold text-gray-800'>Jane Smith</h3>
            <p className='text-gray-600'>Lead Developer</p>
          </div>
          <div className='w-64 text-center flex flex-col items-center'>
            <img
              src={Profile3}
              alt='Team Member'
              className='rounded-full mb-4 h-[10rem] w-[10rem]'
            />
            <h3 className='text-xl font-semibold text-gray-800'>
              Emily Johnson
            </h3>
            <p className='text-gray-600'>Product Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
