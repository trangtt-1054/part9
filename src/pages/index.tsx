import { Microphone } from '../../model/Microphone';
import { GetServerSideProps } from 'next';
import { openDB } from '../openDB';
import Link from 'next/link';

export interface IndexProps {
  microphones: Microphone[];
}
export default function Index({ microphones }: IndexProps) {
  return (
    <div>
      <Link href='/people'>
        <a>People</a>
      </Link>
      <pre>{JSON.stringify(microphones, null, 4)}</pre>;
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async (
  ctx
) => {
  //bình thường nếu là getInitialProps thì phải fetch data từ api rồi mới access db nhưng với getServerSideProps thì ko cần api luôn
  const db = await openDB();
  const microphones = await db.all<Microphone[]>('select * from microphone');
  await new Promise((acc) => {
    setTimeout(acc, 3000);
  }); //wait 3 sec before return props below
  return { props: { microphones } }; //phải có 'props'
};
