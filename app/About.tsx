import Link from "next/link";

const About = () => {
  return (
    <section className="bg-[#f8efd6] dark:text-slate-800">
      <div className="max-w-3xl mx-auto py-12 px-4 flex gap-5 flex-col text-lg ">
        <p>
          Keeping customers happy is easier said than done, especially if you
          have a large customer base.&nbsp;
        </p>
        <p>
          <em>After all, running a business isn’t a piece of cake! </em>🍰
        </p>
        <p>
          Fortunately, you can use tools like{" "}
          <strong>
            <Link href="/">issue tracking software</Link>
          </strong>{" "}
          to establish a workflow to identify, monitor, and resolve customer
          concerns. This way, your customers<em> end up happy </em>instead of
          <em>hitting a</em> <em>dead end</em>.&nbsp;
        </p>

        <p>Let’s go.</p>
      </div>
    </section>
  );
};
export default About;
