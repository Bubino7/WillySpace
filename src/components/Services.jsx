/**
 * Node modules
 */
import React from 'react';

/**
 * Components
 */
import ServiceCard from './ServiceCard';

/**
 * Images
 */
import MarketingLogo from "../../public/Marketing SVG.svg";



const Services = () => {
    return (
        <>
        <div id="services" className="w-full min-h-screen bg-[#567C8D]">
            <div className="flex justify-center pt-10 pb-10">
                <h2 className="font-bold text-[3rem] text-white flex justify-center">Naše služby</h2>
            </div>
            <div className="p-10 flex flex-wrap justify-evenly gap-10">
                <ServiceCard 
                    title="Marketing"
                    description="Vypracovávame prispôsobené marketingové stratégie a plány, ktoré zohľadňujú potreby našich klientov a ich cieľové skupiny, aby sme dosiahli maximálny dopad a úspech."
                    image={MarketingLogo}
                />
                <ServiceCard 
                    title="Branding"
                    description="Vytvárame a spravujeme silné značky, ktoré sa odlišujú od konkurencie. Naša práca zahŕňa návrh názvu, loga, hodnoty a zákazníckej skúsenosti, čo vedie k dôvere a lojalite vašich zákazníkov."
                    image={MarketingLogo}
                />
                <ServiceCard 
                    title="Sociálne média"
                    description="Spravujeme vašu prítomnosť na online platformách ako Facebook, Instagram, Twitter a TikTok, čo umožňuje efektívnu komunikáciu a zapojenie širokej verejnosti do vašich marketingových aktivít."
                    image={MarketingLogo}
                />
                <ServiceCard 
                    title="Web Design"
                    description="Navrhujeme a vytvárame vizuálne atraktívne a funkčné webové stránky, ktoré zohľadňujú použiteľnosť a responzívnosť, aby sme zabezpečili príjemný zážitok pre návštevníkov na všetkých zariadeniach."
                    image={MarketingLogo}
                />
                <ServiceCard 
                    title="Public Relations (PR)"
                    description="Budujeme a udržiavame pozitívne vzťahy medzi vašou organizáciou a jej verejnosťou. Naše aktivity zahŕňajú tlačové správy, organizáciu podujatí a správu sociálnych médií, čím zvyšujeme dôveru a lojalitu vašich zákazníkov."
                    image={MarketingLogo}
                />
                <ServiceCard 
                    title="Poradentsvo"
                    description="Poskytujeme odborné poradenstvo a podporu pri riešení problémov a dosahovaní cieľov. Naši poradcovia analyzujú situácie, navrhujú riešenia a vzdelávajú klientov v oblastiach ako podnikanie, financie a psychológia, aby zlepšili rozhodovanie a efektivitu."
                    image={MarketingLogo}
                />
            </div>
        </div>
        </>
    );
}

export default Services; 




