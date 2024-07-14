import LocalConfig from "@/constants/config";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[12rem]"
      href={"/assets/resume.pdf"}
      download={true}
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
