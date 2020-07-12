import { Microphone } from '../../model/Microphone';

export interface IndexProps {
  microphones: Microphone[];
}
export default function Index({ microphones }: IndexProps) {
  return <pre>{JSON.stringify(microphones, null, 4)}</pre>;
}
