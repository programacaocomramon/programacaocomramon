import { StaticImageData } from "next/image";
import { Level } from "@prisma/client";
import { db } from "@/lib/db";
import Header from "@/app/(root)/(routes)/career/_components/header";
import CoursesSection from "@/app/(root)/(routes)/career/_components/courses-section";
import LEVELS from "@/constants/levels";
import { useEffect, useState } from "react";
import axios from "axios";

interface CareerPageProps {
  heading: string;
  image: StaticImageData;
  description: string;
  slug: string;
}

const CareerPage = ({
  heading,
  image,
  description,
  slug,
}: CareerPageProps) => {

  const [beginnerCourses, setBeginnerCourses] = useState([]);
  const [intermediateCourses, setIntermediateCourses] = useState([]);
  const [advancedCourses, setAdvancedCourses] = useState([]);
  const [specialistCourses, setSpecialistCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/api/careers/${slug}`);
      setBeginnerCourses(response.data.beginner);
      setIntermediateCourses(response.data.intermediate);
      setAdvancedCourses(response.data.advanced);
      setSpecialistCourses(response.data.specialist);
    }
    fetchData();
  }, [slug]);
  
  return (
    <div className="px-5 md:px-10 lg:px-20">
      <Header heading={heading} image={image} description={description} />

      {!!beginnerCourses.length && (
        <CoursesSection
          courses={beginnerCourses}
          level={LEVELS.BEGINNER}
        />
      )}

      {!!intermediateCourses.length && (
        <CoursesSection
          courses={intermediateCourses}
          level={LEVELS.INTERMEDIATE}
        />
      )}

      {!!advancedCourses.length && (
        <CoursesSection
          courses={advancedCourses}
          level={LEVELS.ADVANCED}
        />
      )}

      {!!specialistCourses.length && (
        <CoursesSection
          courses={specialistCourses}
          level={LEVELS.SPECIALIST}
        />
      )}
    </div>
  );
};

export default CareerPage;
