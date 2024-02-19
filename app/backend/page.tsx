import Link from "next/link";
import { BackendContainer } from "@/components/BackendContainer";

const Page = () => {
  return (
    <div className="ml-2 mr-2">
      <h1 className="mt-2 font-mono font-light">
        * This page is displayed like this on purpose, to portray the simplistic and staightforward
        nature of backend development
      </h1>
      <BackendContainer header="Databases">
        Knowledge in building scaleable applications utilizing Relational and Non Relational
        databases. Including cloud based solutions such as AWS, Google Cloud, and Azure.
        <br />
        Including the ability to optimize queries and database performance at scale, and using
        correct tools for the job and identifying which bottle necks to look for.
      </BackendContainer>

      <BackendContainer header="APIs">
        Experienced in leading architecture, design, implementation and scaling of RESTful API
        services with languages such as Node.js, Python, Golang, Java, and Ruby on Rails
        <br />
        Implementing strategies such as{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text font-medium text-transparent">
          caching, rate limiting, and pagination.
        </span>{" "}
        The last thing that I worked on is migrating from an ORM to a SQL query builder to optimize
        the performance of the API.
      </BackendContainer>

      <BackendContainer header="Third Party Integrations">
        Experienced in integrating third party services such as payment gateways, social media
        platforms, and analytics services.
        <br />
        Examples include integrating with{" "}
        <Link href="https://stripe.com/" target="_blank" className="text-blue-500">
          Stripe,
        </Link>{" "}
        <Link href="https://sentry.io/welcome/" target="_blank" className="text-purple-500">
          Sentry
        </Link>{" "}
        and{" "}
        <Link
          href="https://marketingplatform.google.com/about/analytics/"
          target="_blank"
          className="text-green-700"
        >
          Google Anayltics
        </Link>
      </BackendContainer>

      <BackendContainer header="Security">
        Experienced in building upon security best practices, including encryption, authentication,
        and authorization.
      </BackendContainer>

      <BackendContainer header="Cloud Infrastructure">
        Experienced in building applications on cloud infrastructure such as AWS, Google Cloud, and
        Azure.
        <br />
        Having built serverless architecture, CI/CD Pipelines, containerization, and splitting of
        monolith services into microservices.
      </BackendContainer>

      <BackendContainer header="Directional Data Flow">
        I've solved numerous applications where the data requirements were complex and different
        each time
        <br />
        Having built applications requiring
        <span className="font-semibold">
          {" "}
          websockets, message queues, and event driven architecture{" "}
        </span>
        each one with different requirements and constraints.
      </BackendContainer>
    </div>
  );
};

export default Page;
