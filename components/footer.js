export default function Footer() {
  return (
    <>
      <footer className='text-gray-600 body-font'>
        <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <span className='ml-3 text-xl'>박채연의 포트폴리오</span>
          </a>
          <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
            © Front-end Developer —
            <a
              href='https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=cccodus313@gmail.com'
              target='_blank'
              className='text-gray-600 ml-1'
              rel='noopener noreferrer'
            >
              cccodus313@gmail.com / 010.6273.5780
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
