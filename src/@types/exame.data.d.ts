interface question_interval {
  name_interval: string;
}

// page_exame: {
//   id: "b0c6b22b-74ec-4432-99b6-8581297bad0f"
//   questions_interval:
//   created_at: "2024-02-11T17:53:47+0000",
//   updated_at: "2024-02-11T17:53:47+0000",
// }

interface exame {
  id: uuid;
  title: string;
  day: string;
  area: string;
  color: string;
  page_number: number;
  question_num: number;
  created_at: DateTime
  updated_at: DateTime
}
