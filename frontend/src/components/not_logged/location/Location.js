import React from 'react';
import locationImage from '../../../images/lokacija.png';
import { Margin } from '@mui/icons-material';

const Location = () => {
  return (
    <div>
      <h1>Gdje se nalazimo?</h1>
      <p style={{margin: "10px 50px"}}>Naš fitness centar je povoljno smješten u srcu grada, na odličnoj lokaciji koja vam omogućava 
        jednostavan pristup bez obzira na to odakle dolazite. Nalazimo se u blizini glavnih prometnica 
        i javnog prijevoza, što znači da možete lako doći do nas bez ikakvih problema.</p>
        <p style={{margin: "10px 50px"}}>Bilo da dolazite automobilom, javnim prijevozom ili pješice, naša lokacija je izuzetno pristupačna. </p>
      <p style={{fontSize: "bolder"}}>Nalazimo se u ulici <b>Alipašina 45a</b> u Sarajevu.</p>
      <img src={locationImage} alt="Our location on a map" />
      <p style={{margin: "10px 50px"}}>Ne gubite više vrijeme i posjetite nas već danas kako biste započeli putovanje prema boljoj formi 
        i zdravlju. Nalazimo se na izvrsnoj lokaciji koja čeka da vas inspirira i motivira na ostvarenje vaših fitness ciljeva.</p>
    </div>
  );
};

export default Location;
