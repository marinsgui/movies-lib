import loading from "../../assets/loading.svg";

export default function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img src={loading} alt="loading" />
    </div>
  );
}
