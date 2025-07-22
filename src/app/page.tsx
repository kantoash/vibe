import { client } from "@/lib/prisma";
import Image from "next/image";

const Page = async () => {
  const users = await client.user.findMany({
    where: {},
  });
  return <div>{JSON.stringify(users)}</div>;
};

export default Page;