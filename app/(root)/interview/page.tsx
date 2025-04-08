import Agent from "@/components/Agent";
/* about the type : we have 2 types one for taking the interview and the other of generating the interview */

const Page = () => {
  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName="ines" userId="user1" type="generate" />
    </>
  );
};
export default Page;
