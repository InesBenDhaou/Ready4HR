import Vapi from "@vapi-ai/web";
/* what about vapi : (Voice API) is an open-source toolkit built by the Vercel team that allows you to build real-time voice assistants powered by LLMs */
export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);

// our first step will be guiding the ai assistant to collect user information (type of interview (technical/behaviour) or based on the technologies ect ) ==> VAPI WORKFLOW

// second step then we will feed the gemini by this collected info to generate questions

// third step : store the information in the firestore

// last step : this stored data will be then displayed on the homepage
