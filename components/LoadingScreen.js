import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="c-loading" aria-hidden="true">
      <span className="c-loading_icon">
        <Image
          src="/fenjerlogo.png"
          alt=""
          width={280}
          height={280}
          className="c-loading_logo"
          priority
        />
      </span>
    </div>
  );
}
