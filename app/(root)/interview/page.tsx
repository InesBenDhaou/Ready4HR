import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
/* about the type : we have 2 types one for taking the interview and the other of generating the interview */

const Page = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <h3>Interview Generation</h3>
      {/*The only job for this agent is a take information from the user to generate questions using gemini */}
      <Agent userName={user?.name!} userId={user?.id} type="generate" />
    </>
  );
};
export default Page;
