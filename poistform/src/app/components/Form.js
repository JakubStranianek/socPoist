"use client"

import { useState } from "react"
export default function Form() {

const [koren, setKoren] = useState(false)

  return (
    <div className="w-full flex justify-center py-20">
        <div className="w-11/12 lg:w-3/5">
         <h2 className="text-2xl font-bold">Aktualizácia kontaktov</h2>
         <p>Vážený klient, pre jednoduchšiu komunikáciu s poisťovňou Vás prosíme o aktualizáciu alebo poskytnutie Vašich kontaktných údajov.</p>

         <form action="" className="py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    <label>Rodné číslo:</label>
                    <input placeholder="Zadajte rodné čislo bez lomítka" className="border-2 border-[#0575E6] p-2 rounded-lg"></input>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    <label>Identifikačné číslo poistenca:</label>
                    <input placeholder="Zadajte identifikačné číslo poistenca:" className="border-2 border-[#0575E6] p-2 rounded-lg"></input>
                </div>            
            </div>

            <div className="flex flex-col lg:flex-row gap-8 pt-8">
                <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    <label>E-mail:</label>
                    <input placeholder="Zadajte e-mail" className="border-2 border-[#0575E6] p-2 rounded-lg"></input>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    <label>Telefónne číslo:</label>
                    <div className="flex gap-8">
                        <select name="predvolba" className="w-1/3 border-2 border-[#0575E6] p-2 rounded-lg">
                            <option value="+421">+421</option>
                            <option value="+420">+420</option>
                            <option value="+43">+43</option>
                            <option value="+36">+36</option>
                        </select>
                        <input type="text" placeholder="Zadajte telefónne číslo:" className="w-2/3 border-2 border-[#0575E6] p-2 rounded-lg"></input>
                    </div>
                </div>            
            </div>

            <div className="flex gap-8 pt-8">                
                    <input type="checkbox" className="border-2 border-[#0575E6] p-2 rounded-lg w-5 cursor-pointer" onClick={() => {setKoren(!koren)}}></input>                               
                    <label>Korešpondenčná adresa sa nezhoduje s trvalým pobytom?</label>
            </div>

            <div className={koren ? "block" : "hidden"}>
                <div className="flex flex-col lg:flex-row gap-8 pt-8">
                    <div className="w-full lg:w-1/2 flex flex-col gap-2">
                        <label>Ulica s číslom domu:</label>
                        <input placeholder="Zadajte ulicu a číslo domu" className="border-2 border-[#0575E6] p-2 rounded-lg"></input>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col gap-2">
                        <label>Mesto/obec:</label>
                        <input placeholder="Zadajte mesto alebo obec" className="border-2 border-[#0575E6] p-2 rounded-lg"></input>
                    </div>            
                </div>

                <div className="flex flex-col lg:flex-row gap-8 pt-8">
                    <div className="w-full lg:w-1/2 flex flex-col gap-2">
                        <label>Poštové smerovacie číslo:</label>
                        <input placeholder="Zadajte PSČ" className="border-2 border-[#0575E6] p-2 rounded-lg"></input>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col gap-2">
                        <label>Krajina:</label>
                        <input placeholder="Zadajte krajinu" className="border-2 border-[#0575E6] p-2 rounded-lg"></input>
                    </div>            
                </div>
            </div>

            <p className="pt-8">Odoslaním kontaktov budú údaje aktualizované/doplnené v našom informačnom systéme a budú spracúvané v súlade s podmienkami ochrany osobných údajov. Informácie o ochrane osobných údajov nájdete na <a href="https://www.socpoist.sk/" target="_blank" className="text-[#0575E6]">https://www.socpoist.sk/</a></p>
           
            <div className="flex gap-8 pt-8">                
                    <input type="checkbox" className="border-2 border-[#0575E6] rounded-lg w-5 cursor-pointer"></input>                               
                    <label>SÚHLASÍM, ABY MI SOCIÁLNA POISŤOVŇA ZASIELALA NOVINKY A INFORMÁCIE O VÝHODÁCH A SLUŽBÁCH.</label>
            </div>
                    <p className="text-xs pt-4">Udelením tohto súhlasu súhlasite s tým, aby Vaše osobné údaje v rozsahu meno, priezvisko, titul, adresa trvalého pobytu, kontaktná adresa, telefónne číslo a emailová adresa boli spracúvané spoločnosťami Sociálna Poisťovňa aj jej prípadnými dcérskymi spoločnosťami, na účely marketingových aktivít. Súčasne súhlasíte s použitím Vášho telefónneho čísla a emailovej adresy na zaslanie marketingových správ formou elektronickej pošty alebo formou služieb krátkych správ. Súhlas je poskytnutý na dobu počas trvania poistenia a na dobu 5 rokov po jeho ukončení. Poskytnutie osobných údajov na uvedené účely nie je povinné. Tento súhlas je možné kedykoľvek odvolať, pričom odvolanie nemá spätné účinky.</p>
         
         <div className="pt-8">
            <input type="submit" value={"ODOSLAŤ"} className="bg-[#0575E6] text-white py-2 px-12 rounded-lg font-bold hover:bg-opacity-75" />
         </div>
         </form>
        </div>
    </div>
  )
}
