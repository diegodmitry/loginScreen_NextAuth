import NextAuth from 'next-auth';
import { options } from './options';

const handler = NextAuth(options);

// export default handler
// export default handler;
export { handler as GET, handler as POST }