import { useState } from 'react';
import { db } from '../firebase/firebaseConfig';  // Import Firestore instance

const PetProfileForm = () => {
  const [pet, setPet] = useState({
    name: '',
    breed: '',
    age: '',
    weight: '',
    healthConditions: '',
    allergies: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setPet({
      ...pet,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save pet profile data to Firebase Firestore
    db.collection('petProfiles').add(pet)
      .then(() => {
        console.log('Pet profile saved successfully');
        // Optionally, reset form after submission
        setPet({
          name: '',
          breed: '',
          age: '',
          weight: '',
          healthConditions: '',
          allergies: ''
        });
      })
      .catch((error) => {
        console.error('Error saving profile:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Create Pet Profile</h2>

      <label className="block mb-2">Pet Name:</label>
      <input
        type="text"
        name="name"
        value={pet.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label className="block mb-2">Breed:</label>
      <input
        type="text"
        name="breed"
        value={pet.breed}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label className="block mb-2">Age (years):</label>
      <input
        type="number"
        name="age"
        value={pet.age}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label className="block mb-2">Weight (kg):</label>
      <input
        type="number"
        name="weight"
        value={pet.weight}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label className="block mb-2">Health Conditions:</label>
      <textarea
        name="healthConditions"
        value={pet.healthConditions}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      ></textarea>

      <label className="block mb-2">Allergies:</label>
      <textarea
        name="allergies"
        value={pet.allergies}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      ></textarea>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Save Profile
      </button>
    </form>
  );
};

export default PetProfileForm;
