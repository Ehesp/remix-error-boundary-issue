
export const loader = async () => {
  throw new Error('Foo bar');
};

export default function Index() {
  return <div>Hello</div>;
}