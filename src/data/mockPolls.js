const mockPolls = [
    {
      id: 1,
      title: 'Favorite Programming Language',
      options: ['JavaScript', 'Python', 'Java', 'C++'],
      votes: [10, 15, 8, 5], // Number of votes per option
      createdBy: 'user@example.com',
      createdAt: '2023-10-01',
      status: 'active', // 'active' or 'closed'
    },
    {
      id: 2,
      title: 'Best Framework for Web Development',
      options: ['React', 'Vue', 'Angular', 'Svelte'],
      votes: [20, 12, 10, 8],
      createdBy: 'user@example.com',
      createdAt: '2023-10-05',
      status: 'closed',
    },
  ];
  
  export default mockPolls;