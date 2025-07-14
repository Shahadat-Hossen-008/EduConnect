import Image from "next/image";

export default async function CollegeDetails({ params }) {
  const id = await params;
  // console.log(id.id);
  const findData = await fetch(
    `http://localhost:5000/college-details/${id.id}`
  );
  const response = await findData.json();
  return (
    <div className="w-10/12 mx-auto py-10">
      <Image
        className="w-full h-[400px] object-cover"
        src={response.collegeImage}
        alt={response.collegeName}
        width={600}
        height={200}
      />
      <h2 className="text-2xl my-5 font-bold ">{response.collegeName}</h2>
      <h3 className="text-xl font-semibold mb-5">Overview</h3>
      <p>{response.description}</p>
      <h3 className="text-xl font-semibold my-5">Admission Process</h3>
      <p>{response.admissionProcess}</p>
      <h3 className="text-xl font-semibold my-5">Courses</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {response.courses?.map((course, idx) => {
          return (
            <div key={idx} className="p-5 rounded-xl shadow-sm">
              <Image
                className="rounded-lg"
                src={course.courseImage}
                alt={course.courseName}
                width={320}
                height={120}
              />
              <h3 className="text-lg font-semibold my-3">
                {course.courseName}
              </h3>
              <p>{course.courseDetails}</p>
            </div>
          );
        })}
      </div>
      <h3 className="text-xl font-semibold my-5">Events</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {response.events?.map((e, idx) => {
          return (
            <div key={idx} className="p-5 rounded-xl shadow-sm">
              <Image
                className="rounded-lg"
                src={e.image}
                alt={e.name}
                width={320}
                height={120}
              />
              <h3 className="text-lg font-semibold my-3">{e.name}</h3>
              <p>{e.shortDescription}</p>
            </div>
          );
        })}
      </div>
      <h3 className="text-xl font-semibold my-5">Research</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {response.research.map((data, idx) => {
          return (
            <div key={idx} className="p-5 rounded-xl shadow-sm">
              <Image
                className="rounded-lg"
                src={data.image}
                alt={data.name}
                priority
                width={320}
                height={120}
              />
              <h3 className="text-lg font-semibold my-3">{data.name}</h3>
              <p>{data.shortDescription}</p>
            </div>
          );
        })}
      </div>
      <h3 className="text-xl font-semibold my-5">Sports</h3>
      <p>{response.sportsFacilities}</p>
    </div>
  );
}
