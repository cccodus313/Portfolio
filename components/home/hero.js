import Animation from './animation';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          꾸준히 공부 하는 준비된 개발자
          <br className='hidden lg:inline-block' />
          박채연 입니다👩🏻‍💻
        </h1>
        <p className='mb-8 leading-relaxed'>
          "유의미한 결과물을 창출하는 개발자의 매력"에 빠져<br></br> "적극적인 배움의 자세와 강한 책임감"을 가지고
          <br></br> "적극적으로 새로운 기술을 배우고 익히려는 노력"을 통해 <br></br>팀에 꼭 필요한 개발자가 되고
          싶습니다.
        </p>
        <div className='flex justify-center'>
          <Link href='https://www.notion.so/Front-end-Developer-3741f0571b174460a88c85424b741b0b'>
            <p className='btn-project'>프로젝트 보러가기</p>
          </Link>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <Animation />
      </div>
    </>
  );
}
