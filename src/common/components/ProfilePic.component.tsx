interface ProfilePicProps {
  src: string;
}

const ProfilePic = ({ src }: ProfilePicProps) => {
  return (
    <div className="bg-[url('assets/images/default-profile-pic.png')] bg-contain bg-dark-2 rounded-full select-none inline-block w-[28px] h-[28px] ">
      <img className="rounded-full" src={src} alt="" />
    </div>
  );
};

export default ProfilePic;
