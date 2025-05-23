interface Props {
  title?: string;
  subTitle?: string;
}

const Header = ({ title, subTitle }: Props) => {
  return (
    <div className='w-full px-10 mb-10 mt-3 text-center'>
      {title && <div className='font-bold text-2xl mb-2'>{title}</div>}
      {subTitle && <div className='text-gray-400'>{subTitle}</div>}
    </div>
  );
};

export default Header;
