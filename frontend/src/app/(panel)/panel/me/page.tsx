import UserForm from "./UserForm";

export default function UserDetail() {
  return (
    <>
      <header className="flex items-center justify-between">
        <h5 className="text-2xl font-semibold text-teal-500">اطلاعات کاربری</h5>
      </header>
      <hr className="bg-zinc-800 my-3" />
      <UserForm />
    </>
  );
}
