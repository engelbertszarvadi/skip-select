interface Props {
  title?: string;
  subTitle?: string;
}

const Hero = ({ title, subTitle }: Props) => {
  return (
    <div className='w-12/12 p-10 pt-5 align-middle justify-items-center'>
      <div className='font-bold text-2xl mb-2'>{title}</div>
      <div className='text-gray-400'>{subTitle}</div>
    </div>
  );
};

export default Hero;
