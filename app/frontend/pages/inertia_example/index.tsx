import Layout from "@/layouts";

const InertiaExample = () => {
  return (
    <>
      <h1>Welcome</h1>
      <p>Hello world, welcome to your first Inertia app!</p>
    </>
  );
};

InertiaExample.layout = (page: React.ReactNode) => (
  <Layout name="from layout">{page}</Layout>
);

export default InertiaExample;
