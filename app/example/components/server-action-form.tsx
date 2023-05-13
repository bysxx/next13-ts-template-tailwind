async function serverAction(formData: FormData) {
  'use server';

  console.log('id', formData.get('id'));
  console.log('pw', formData.get('pw'));
}

export default function ServerActionForm() {
  return (
    <div className="mx-auto flex flex-col items-center gap-y-2 rounded-lg bg-white p-4 shadow-lg">
      <form action={serverAction as any} className="flex flex-col gap-y-2">
        <input type="text" name="id" placeholder="ID" className="border border-solid p-2" />
        <input type="password" name="pw" placeholder="PW" className="border border-solid p-2" />
        <button className="border border-solid p-2">Login</button>
      </form>
    </div>
  );
}
