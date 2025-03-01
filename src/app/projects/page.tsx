'use client'
import {useState} from "react";

const projects = [
  {title: "react simple app", description: "work", technologies: ["react", "redux",]},
  {title: "next app", description: "work", technologies: ["next",]},
  {title: "redux toolkit example", description: "work", technologies: ["redux",]},
  {title: "asd", description: "work", technologies: ["react", "redux", "typescript"]},
  {title: "asdasd", description: "work", technologies: ["next", "typescript"]},
  {title: "asdasdasd", description: "work", technologies: ["redux", "typescript"]},
];

const categories = ["react", "next", "redux", "typescript"];

export default function Projects() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSelectCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) => prev.filter((c) => c !== category));
    } else {
      setSelectedCategories((prev) => [...prev, category]);
    }
  }

  const filteredProjects = selectedCategories.length === 0 ? projects : projects.filter((project) => project.technologies.some((category) => selectedCategories.includes(category)));


  console.log(selectedCategories)
  return <div>
    <div>
      <p>Фильтр</p>
      <ul>
        {categories.map((category) => <li key={category}>
              <label>
                <input type={'checkbox'} onChange={() => handleSelectCategory(category)}
                       checked={selectedCategories.includes(category)}/>
                {category}
              </label>
            </li>
        )}
      </ul>
    </div>
    <div>
      <p>Проекты</p>
      <ul>
        {filteredProjects.map((project) => <li key={project.title}>
          <span>{project.title}</span>
          <span>{project.description}</span>
        </li>)}
      </ul>
    </div>


  </div>
}

