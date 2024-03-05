import React from 'react';

function CardList({ data }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {data.map((citizen, index) => (
        <div className="col" key={index}>
          <div className="card h-100">
            

            <div className="card-body">
              <h5 className="card-title">{citizen.Name}</h5>
              {/* Image */}
            <img src={`https://picsum.photos/200/300?random=${index}`} className="card-img-top" alt={citizen.Name} />
              <p className="card-text">UserId: {citizen.UserId}</p>
              <p className="card-text">Sex: {citizen.Sex}</p>
              <p className="card-text">Place of Birth: {citizen.BirthPlace}</p>
              <p className="card-text">Date of Birth: {citizen.DOB}</p>
              <p className="card-text">Father's Name: {citizen.FatherName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
