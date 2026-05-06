const initialState = {
  slides: [
    {
      id: 1,
      source: '/images/img1.jpg',
      title: 'Welcome to Event Manager',
      description: 'Organize your events effortlessly'
    },
    {
      id: 2,
      source: '/images/img2.jpg',
      title: 'Create Amazing Events',
      description: 'Plan and manage events with ease'
    },
    {
      id: 3,
      source: '/images/img3.jpg',
      title: 'Join the Community',
      description: 'Connect with event organizers worldwide'
    }
  ]
};

export default function heroImagesReducer(state = initialState, action) {
  return state;
}
