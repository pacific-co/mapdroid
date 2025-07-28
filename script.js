document.addEventListener('DOMContentLoaded', () => {

    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
        "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus",
        "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
        "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Brazzaville)",
        "Congo (Kinshasa)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Côte d'Ivoire", "Denmark",
        "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
        "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
        "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
        "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
        "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
        "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
        "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
        "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
        "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
        "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
        "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
        "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
        "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    const countryInfo = {
        "Afghanistan": `
            <h3>History of Afghanistan</h3>
            <p>Afghanistan has a long and complex history as a crossroads of empires. From ancient civilizations like the Greco-Bactrians to invasions by Genghis Khan and later British and Soviet occupations, its rugged terrain has been both a refuge and a battleground. After decades of internal conflict, the Taliban returned to power in 2021, and the country remains in a state of significant political and social transition.</p>
`,

        "Albania": `
            <h3>History of Albania</h3>
            <p>Albania’s roots stretch back to the ancient Illyrians. Over centuries, it came under Roman, Byzantine, and Ottoman control. It declared independence in 1912 and endured communist isolation under Enver Hoxha during the Cold War. Since the 1990s, Albania has transitioned into a democratic republic and is pursuing European integration.</p>
`,

        "Algeria": `
            <h3>History of Algeria</h3>
            <p>Algeria’s history includes Phoenician, Roman, and Islamic eras before becoming a French colony in the 19th century. A brutal war of independence led to liberation in 1962. Since then, Algeria has grappled with authoritarian rule, civil unrest in the 1990s, and ongoing economic challenges despite rich oil and gas reserves.</p>
`,

        "Andorra": `
             <h3>History of Andorra</h3>
            <p>Founded in 805 by Charlemagne, Andorra has existed as a co-principality jointly ruled by France and the Spanish Bishop of Urgell. Its remote Pyrenean location preserved its independence through centuries. In recent times, Andorra has become known for skiing, tourism, and its unique political system.</p>
`,
        "Angola": `
            <h3>History of Angola</h3>
            <p>Angola's history is deeply intertwined with Portuguese colonization, beginning in the 15th century. It served as a major source for the transatlantic slave trade. After a lengthy war of independence, Angola gained freedom from Portugal in 1975, only to be plunged into a devastating civil war that lasted for nearly three decades. Since peace was achieved in 2002, Angola has focused on reconstruction, largely funded by its vast oil reserves.</p>
        `,
        "Antigua and Barbuda": `
            <h3>History of Antigua and Barbuda</h3>
            <p>First inhabited by Indigenous peoples, Antigua and Barbuda were colonized by the English in the 17th century, who established sugar plantations based on enslaved African labor. The nation gained full independence from the United Kingdom on November 1, 1981. Today, its economy is heavily reliant on tourism, famous for its numerous beaches and sailing events.</p>
        `,
        "Argentina": `
            <h3>History of Argentina</h3>
            <p>After declaring independence from Spain in 1816, Argentina experienced waves of European immigration in the late 19th and early 20th centuries, becoming a wealthy agricultural nation. The 20th century was marked by political instability, including the influential populist movement of Peronism and periods of military dictatorship. Argentina returned to democracy in 1983 and remains a significant cultural and economic power in South America.</p>
        `,
        "Armenia": `
            <h3>History of Armenia</h3>
            <p>As one of the world's oldest civilizations, Armenia was the first nation to adopt Christianity as its state religion in 301 AD. Its history is marked by periods of empire and foreign rule. The Armenian Genocide during World War I remains a defining and tragic event. After decades as a Soviet Republic, Armenia regained independence in 1991 and continues to navigate a complex geopolitical landscape.</p>
        `,
        "Australia": `
            <h3>History of Australia</h3>
            <p>Inhabited by Indigenous Australians for at least 65,000 years, the continent was colonized by the British as a penal colony in 1788. The six colonies federated to form the Commonwealth of Australia in 1901. Post-World War II immigration transformed it into a multicultural society. Today, Australia is a prosperous nation with a strong economy and unique natural environment.</p>
        `,
        "Austria": `
            <h3>History of Austria</h3>
            <p>Once the center of the powerful Habsburg monarchy and the Austro-Hungarian Empire, Austria's influence shaped much of European history. After the empire's dissolution following World War I, and a period of annexation by Nazi Germany, Austria re-established itself as a republic. It regained full sovereignty in 1955, declaring permanent neutrality, and is now a prosperous member of the European Union.</p>
        `,
        "Azerbaijan": `
            <h3>History of Azerbaijan</h3>
            <p>Located at the crossroads of Eastern Europe and Western Asia, Azerbaijan has a rich and diverse history. It was the first secular democratic republic in the Muslim world in 1918, before being incorporated into the Soviet Union. Since regaining independence in 1991, its development has been heavily influenced by its significant oil and gas reserves. The Nagorno-Karabakh region has been a source of long-standing conflict with Armenia.</p>
        `,
        "Bahamas": `
            <h3>History of the Bahamas</h3>
            <p>The Bahamas, the site of Columbus's first landfall in the New World in 1492, were later settled by the British and became a haven for pirates. After the American Revolution, American loyalists migrated to the islands with their slaves. The country gained independence from the United Kingdom in 1973 and has since developed an economy based on tourism and offshore finance.</p>
        `,
        "Bahrain": `
            <h3>History of Bahrain</h3>
            <p>Known in antiquity as Dilmun, Bahrain has a history stretching back over 4,000 years as a major trading hub. It was renowned for its pearl fisheries before the discovery of oil in 1932, the first in the Arabian Gulf, which transformed its economy. Bahrain became a British protectorate in the 19th century and gained full independence in 1971. It has since developed into a regional financial center.</p>
        `,
        "Bangladesh": `
            <h3>History of Bangladesh</h3>
            <p>The history of Bangladesh is part of the greater history of Bengal. After the partition of British India in 1947, it became East Pakistan. A brutal liberation war in 1971, fueled by linguistic and cultural differences with West Pakistan, led to the creation of the independent state of Bangladesh. The country has since made significant strides in economic development and poverty reduction despite facing numerous challenges.</p>
        `,
        "Barbados": `
            <h3>History of Barbados</h3>
            <p>Continuously under British rule from 1627 until its independence in 1966, Barbados was one of the most prosperous sugar colonies, built on the labor of enslaved Africans. Unlike many Caribbean islands, it was never captured by another European power. In 2021, Barbados transitioned to a parliamentary republic, replacing the British monarch with its own head of state.</p>
        `,
        "Belarus": `
            <h3>History of Belarus</h3>
            <p>Historically part of various larger states, including the Grand Duchy of Lithuania and the Russian Empire, Belarus suffered immense devastation during World War II. It became a founding republic of the Soviet Union. Since gaining independence in 1991, Belarus has maintained close political and economic ties with Russia and has been under the long-standing leadership of President Alexander Lukashenka.</p>
        `,
        "Belgium": `
            <h3>History of Belgium</h3>
            <p>Situated at a cultural and geographical crossroads, the area of modern Belgium has been controlled by various European powers. It gained independence from the Netherlands in 1830. Despite its neutrality, it was invaded by Germany in both World Wars. Today, its capital, Brussels, is the de facto capital of the European Union and hosts the headquarters of NATO.</p>
        `,
        "Belize": `
            <h3>History of Belize</h3>
            <p>Once the heartland of the ancient Maya civilization, Belize was later settled by British logwood cutters. Known as British Honduras, it was a British colony until gaining full independence in 1981. A territorial dispute with neighboring Guatemala remains unresolved. Belize is known for its incredible biodiversity, including the Belize Barrier Reef, a UNESCO World Heritage site.</p>
        `,
        "Benin": `
            <h3>History of Benin</h3>
            <p>The territory of modern Benin was home to the powerful Kingdom of Dahomey, known for its formidable all-female military unit, the Agojie. The region was a major center of the transatlantic slave trade. After gaining independence from France in 1960, Benin experienced a period of political instability before becoming a pioneer in democratic transitions in Africa in the 1990s.</p>
        `,
        "Bhutan": `
            <h3>History of Bhutan</h3>
            <p>A Himalayan kingdom with a history deeply rooted in Buddhism, Bhutan remained largely isolated for centuries, which helped preserve its unique culture. It has never been formally colonized. In 2008, it transitioned from an absolute monarchy to a constitutional monarchy. Bhutan is famous for its philosophy of "Gross National Happiness," which guides its development.</p>
        `,
        "Bolivia": `
            <h3>History of Bolivia</h3>
            <p>Once part of the Inca Empire, Bolivia became a major source of silver for the Spanish Empire. After independence in 1825, its history was marked by political instability and territorial losses to its neighbors. The 1952 National Revolution brought significant social reforms. In the 21st century, the country elected its first indigenous president, Evo Morales, reflecting the growing political power of its indigenous majority.</p>
        `,
        "Bosnia and Herzegovina": `
            <h3>History of Bosnia and Herzegovina</h3>
            <p>A region of rich medieval history, Bosnia and Herzegovina was under Ottoman rule for over four centuries, creating a unique multi-religious society. It was later annexed by Austria-Hungary. After the breakup of Yugoslavia, it declared independence in 1992, which was followed by a devastating war. The 1995 Dayton Agreement ended the war and established a complex political structure to represent its constituent ethnic groups.</p>
        `,
        "Botswana": `
            <h3>History of Botswana</h3>
            <p>Botswana, formerly the British protectorate of Bechuanaland, gained independence in 1966. At the time, it was one of the poorest countries in Africa. The discovery of vast diamond reserves shortly after independence transformed its economy. It has since maintained a stable democracy and has one of the highest economic growth rates in the world, becoming an African success story.</p>
        `,
        "Brazil": `
            <h3>History of Brazil</h3>
            <p>Colonized by Portugal in the 16th century, Brazil's development was based on sugar cane plantations and later gold, relying heavily on enslaved African labor. It became an independent empire in 1822 and a republic in 1889. The 20th century saw significant industrialization and periods of military rule. Today, Brazil is a major economic and political power, known for its vast Amazon rainforest and vibrant culture.</p>
        `,
        "Brunei Darussalam": `
            <h3>History of Brunei Darussalam</h3>
            <p>The Sultanate of Brunei was a powerful empire from the 15th to the 17th centuries, controlling Borneo and parts of the Philippines. Its power declined with the arrival of European powers. It became a British protectorate in 1888 and gained full independence in 1984. Its modern prosperity is built on extensive petroleum and natural gas fields.</p>
        `,
        "Bulgaria": `
            <h3>History of Bulgaria</h3>
            <p>The First Bulgarian Empire, founded in the 7th century, was a powerful medieval state in the Balkans and a center of Slavic culture. After centuries of Ottoman rule, Bulgaria gained its independence in the late 19th century. Following World War II, it became a communist state within the Soviet bloc. Since the fall of communism in 1989, Bulgaria has transitioned to a democracy and is a member of the EU and NATO.</p>
        `,
        "Burkina Faso": `
            <h3>History of Burkina Faso</h3>
            <p>Home to the historic Mossi Kingdoms, the area was colonized by France and gained independence as Upper Volta in 1960. In 1984, under the revolutionary leader Thomas Sankara, the country was renamed Burkina Faso, meaning "Land of the Upright People." The country has faced political instability but is working towards democratic consolidation and development.</p>
        `,
        "Burundi": `
            <h3>History of Burundi</h3>
            <p>A kingdom for centuries, Burundi was colonized by Germany and then Belgium. Ethnic tensions between the Hutu and Tutsi groups were exacerbated during colonial rule and have tragically marked its post-independence history, leading to civil wars and genocide. The country has been on a long path toward peace and reconciliation since the end of the civil war in 2005.</p>
        `,
        "Cabo Verde": `
            <h3>History of Cabo Verde</h3>
            <p>Uninhabited when discovered by the Portuguese in the 15th century, the islands of Cabo Verde became a major hub for the transatlantic slave trade. This history created a unique Creole culture. After gaining independence from Portugal in 1975, it has become one of Africa's most stable and democratic nations, often cited as a development success story.</p>
        `,
        "Cambodia": `
            <h3>History of Cambodia</h3>
            <p>The Khmer Empire, which flourished from the 9th to the 15th centuries, built the magnificent temples of Angkor. After centuries of decline, Cambodia became a French protectorate. The 20th century was marked by the brutal Khmer Rouge regime (1975-1979), which was responsible for the Cambodian genocide. The country has since been rebuilding and has re-established a constitutional monarchy.</p>
        `,
        "Cameroon": `
            <h3>History of Cameroon</h3>
            <p>A former German colony, Cameroon was divided between France and Britain after World War I. The two parts were reunited in 1961. The country is known for its cultural and geographical diversity, often called "Africa in miniature." It has faced political challenges, including the ongoing Anglophone crisis in its western regions.</p>
        `,
        "Canada": `
            <h3>History of Canada</h3>
            <p>Inhabited by Indigenous peoples for millennia, Canada was colonized by both the French and British. In 1867, several colonies united to form the Dominion of Canada. It has since grown into a prosperous and diverse nation, known for its vast landscapes, multiculturalism, and strong social safety net. It is a parliamentary democracy and a constitutional monarchy.</p>
        `,
        "Central African Republic": `
            <h3>History of the Central African Republic</h3>
            <p>A French colony that gained independence in 1960, the Central African Republic has been plagued by political instability, military coups, and internal conflicts ever since. This includes the notorious reign of Emperor Bokassa I. Despite being rich in natural resources like diamonds and gold, it remains one of the world's poorest and most fragile states.</p>
        `,
        "Chad": `
            <h3>History of Chad</h3>
            <p>Chad was home to powerful African empires that controlled trans-Saharan trade routes. After independence from France in 1960, the country has been marked by chronic instability, civil wars, and conflicts with neighboring countries. The discovery of oil in the early 2000s has brought economic opportunities but has also fueled corruption and internal tensions.</p>
        `,
        "Chile": `
            <h3>History of Chile</h3>
            <p>After gaining independence from Spain in the early 19th century, Chile developed into a relatively stable and prosperous nation. The 20th century saw the election of a socialist government under Salvador Allende, which was overthrown by a military coup in 1973 led by Augusto Pinochet. Chile returned to democracy in 1990 and has since become one of Latin America's most stable and prosperous economies.</p>
        `,
        "China": `
            <h3>History of China</h3>
            <p>Boasting one of the world's oldest continuous civilizations, China has a history of imperial dynasties, technological innovation, and profound cultural influence. The 20th century saw the end of imperial rule, civil war, and the establishment of the People's Republic of China in 1949. Since the late 1970s, economic reforms have transformed it into a major global power.</p>
        `,
        "Colombia": `
            <h3>History of Colombia</h3>
            <p>After independence from Spain, Colombia's history was marked by political instability and internal conflicts. From the 1960s, it endured a long and complex armed conflict involving guerrilla groups, paramilitaries, and government forces, often fueled by the drug trade. A 2016 peace agreement with the largest rebel group, FARC, has been a major step towards peace and reconciliation.</p>
        `,
        "Comoros": `
            <h3>History of Comoros</h3>
            <p>An archipelago in the Indian Ocean, the Comoros gained independence from France in 1975. Its post-independence history has been marked by extreme political instability, with numerous coups and secessionist movements. One of the islands, Mayotte, chose to remain a French territory. The country faces significant economic challenges.</p>
        `,
        "Congo (Brazzaville)": `
            <h3>History of the Republic of the Congo</h3>
            <p>A former French colony, the Republic of the Congo gained independence in 1960. Its post-independence history has seen periods of political instability and a devastating civil war in the late 1990s. The economy is heavily dependent on oil production, and the country has been under the long-standing leadership of President Denis Sassou Nguesso.</p>
        `,
        "Congo (Kinshasa)": `
            <h3>History of the Democratic Republic of the Congo</h3>
            <p>Initially the personal property of King Leopold II of Belgium, the Congo Free State was the site of horrific atrocities. After becoming a Belgian colony, it gained independence in 1960. The post-independence period was marked by political crisis, the long authoritarian rule of Mobutu Sese Seko, and devastating wars that involved multiple African nations. Despite immense natural wealth, the DRC remains one of the world's poorest countries.</p>
        `,
        "Costa Rica": `
            <h3>History of Costa Rica</h3>
            <p>A relatively overlooked Spanish colony, Costa Rica has a history largely free of the civil wars and military dictatorships that have plagued its neighbors. After a brief civil war in 1948, the country famously abolished its army, redirecting funds to education and healthcare. It has become a beacon of democracy, peace, and environmental stewardship in Latin America.</p>
        `,
        "Croatia": `
            <h3>History of Croatia</h3>
            <p>After centuries of being part of larger empires, including the Hungarian and Habsburg monarchies, Croatia became part of Yugoslavia after World War I. It declared independence from Yugoslavia in 1991, leading to the Croatian War of Independence. Since the end of the war, Croatia has rebuilt and developed, becoming a member of NATO and the European Union.</p>
        `,
        "Cuba": `
            <h3>History of Cuba</h3>
            <p>A Spanish colony for over 400 years, Cuba became a republic in 1902 but remained under heavy U.S. influence. The 1959 Cuban Revolution, led by Fidel Castro, established a communist government, leading to decades of tension with the United States and a long-standing economic embargo. The country is known for its unique political history and cultural influence.</p>
        `,
        "Cyprus": `
            <h3>History of Cyprus</h3>
            <p>Strategically located in the Mediterranean, Cyprus has been controlled by numerous empires throughout its history. It gained independence from Britain in 1960. In 1974, a coup aimed at union with Greece triggered a Turkish invasion, leading to the de facto division of the island that persists to this day between the Greek Cypriot south and the Turkish Cypriot north.</p>
        `,
        "Czechia": `
            <h3>History of Czechia</h3>
            <p>The Kingdom of Bohemia was a major power in the Middle Ages before becoming part of the Habsburg Empire for centuries. After World War I, it formed Czechoslovakia with Slovakia. Following decades of communist rule, the 1989 Velvet Revolution peacefully ended the regime. In 1993, Czechoslovakia peacefully dissolved into the Czech Republic (Czechia) and Slovakia.</p>
        `,
        "Côte d'Ivoire": `
            <h3>History of Côte d'Ivoire</h3>
            <p>After independence from France in 1960, Côte d'Ivoire enjoyed decades of economic prosperity and political stability under its founding president, Félix Houphouët-Boigny. His death was followed by a period of political turmoil, including a civil war. The country, the world's largest cocoa producer, has since been on a path of reconciliation and economic recovery.</p>
        `,
        "Denmark": `
            <h3>History of Denmark</h3>
            <p>A kingdom with a history stretching back to the Viking Age, Denmark once controlled a vast North Sea empire. The Kalmar Union united the Nordic kingdoms under Danish rule for over a century. A constitutional monarchy since 1849, Denmark is known for its strong welfare state, high quality of life, and progressive social policies.</p>
        `,
        "Djibouti": `
            <h3>History of Djibouti</h3>
            <p>Strategically located at the entrance to the Red Sea, Djibouti was a French colony that gained independence in 1977. Its location has made it a prime spot for foreign military bases, which are a key part of its economy. It has maintained relative stability in a volatile region, serving as a crucial port for landlocked Ethiopia.</p>
        `,
        "Dominica": `
            <h3>History of Dominica</h3>
            <p>Known as the "Nature Isle of the Caribbean," Dominica was the last Caribbean island to be colonized by Europeans, due to the fierce resistance of the native Kalinago people. It gained independence from Britain in 1978. Its economy is based on agriculture and ecotourism, leveraging its pristine rainforests and volcanic landscapes.</p>
        `,
        "Dominican Republic": `
            <h3>History of the Dominican Republic</h3>
            <p>Occupying the eastern part of Hispaniola, the Dominican Republic was the site of the first permanent European settlement in the Americas. After centuries of Spanish, French, and Haitian rule, it declared independence in 1844. The 20th century was dominated by the long and brutal dictatorship of Rafael Trujillo. The country has since moved towards democracy and has a strong tourism-based economy.</p>
        `,
        "Ecuador": `
            <h3>History of Ecuador</h3>
            <p>Once part of the Inca Empire, Ecuador became a Spanish colony and later part of Gran Colombia before achieving full independence. Its history has been marked by political instability and territorial disputes. The country is known for its incredible biodiversity, from the Amazon rainforest to the Galápagos Islands, which inspired Darwin's theory of evolution.</p>
        `,
        "Egypt": `
            <h3>History of Egypt</h3>
            <p>Home to one of the world's oldest and most influential civilizations, ancient Egypt flourished for millennia along the Nile River. Later ruled by Persian, Greek, Roman, and Arab empires, it became a center of Islamic learning. After gaining independence from Britain in the 20th century, Egypt has played a central role in Middle Eastern politics.</p>
        `,
        "El Salvador": `
            <h3>History of El Salvador</h3>
            <p>The smallest country in Central America, El Salvador's 20th-century history was marked by a brutal civil war (1979-1992) between the government and left-wing guerrillas. Peace accords in 1992 brought the conflict to an end. The country has since faced significant challenges with gang violence and poverty.</p>
        `,
        "Equatorial Guinea": `
            <h3>History of Equatorial Guinea</h3>
            <p>A former Spanish colony, Equatorial Guinea gained independence in 1968. Its post-independence history has been dominated by two authoritarian rulers and is marked by one of the worst human rights records in the world. The discovery of large offshore oil reserves in the 1990s has led to immense wealth for the ruling elite but widespread poverty for the population.</p>
        `,
        "Eritrea": `
            <h3>History of Eritrea</h3>
            <p>After being an Italian colony, Eritrea was federated with Ethiopia after World War II. This led to a 30-year war for independence, which was achieved in 1993. Since then, the country has been ruled by a single party and has become one of the most isolated and authoritarian states in the world.</p>
        `,
        "Estonia": `
            <h3>History of Estonia</h3>
            <p>Ruled by Danes, Germans, Swedes, and Russians for centuries, Estonia declared independence in 1918. This was short-lived, as it was forcibly incorporated into the Soviet Union in 1940. It regained its independence in 1991 through the "Singing Revolution." Since then, Estonia has become a technologically advanced and prosperous nation, a member of the EU and NATO.</p>
        `,
        "Eswatini": `
            <h3>History of Eswatini</h3>
            <p>Formerly known as Swaziland, the Kingdom of Eswatini is one of the last absolute monarchies in Africa. A British protectorate that gained independence in 1968, it has managed to preserve its traditional culture and monarchy. The country faces ongoing calls for democratic reform.</p>
        `,
        "Ethiopia": `
            <h3>History of Ethiopia</h3>
            <p>One of the world's oldest independent nations, Ethiopia has a rich history dating back to the ancient Kingdom of Aksum. It is the only African country that was never formally colonized, apart from a brief Italian occupation. After the overthrow of its ancient monarchy in 1974, it endured a period of military rule. Today, it is a major power in the Horn of Africa.</p>
        `,
        "Fiji": `
            <h3>History of Fiji</h3>
            <p>A Pacific island nation with a history of Melanesian and Polynesian settlement, Fiji was ceded to the British in 1874. The British brought indentured laborers from India, creating a multi-ethnic society. Since independence in 1970, Fijian politics has been marked by ethnic tensions and several military coups. Tourism is a cornerstone of its economy.</p>
        `,
        "Finland": `
            <h3>History of Finland</h3>
            <p>For centuries, Finland was part of the Kingdom of Sweden, then an autonomous Grand Duchy within the Russian Empire. It declared independence in 1917. Finland fought two wars against the Soviet Union during World War II, preserving its independence. After a period of neutrality during the Cold War, it has become a member of the EU and, more recently, NATO.</p>
        `,
        "France": `
            <h3>History of France</h3>
            <p>From the Roman province of Gaul to the French Revolution and the Napoleonic Empire, France has played a central role in European and world history. It was a major colonial power and a key player in both World Wars. A founding member of the European Union, France is renowned for its profound cultural influence, from art and philosophy to cuisine and fashion.</p>
        `,
        "Gabon": `
            <h3>History of Gabon</h3>
            <p>A former French colony, Gabon gained independence in 1960. Its post-independence history was dominated for over 40 years by President Omar Bongo. The discovery of oil has made it one of the more prosperous nations in sub-Saharan Africa, though wealth is not evenly distributed. A military coup in 2023 ended the Bongo family's long rule.</p>
        `,
        "Gambia": `
            <h3>History of the Gambia</h3>
            <p>The smallest country in mainland Africa, the Gambia's geography is defined by the river that runs through it. A British colony that gained independence in 1965, it was under authoritarian rule for 22 years until a surprising election result and peaceful transition in 2016. Its economy is based on tourism and agriculture.</p>
        `,
        "Georgia": `
            <h3>History of Georgia</h3>
            <p>With an ancient history and a unique language and alphabet, Georgia was one of the first countries to adopt Christianity. It was incorporated into the Russian Empire and later the Soviet Union. Since regaining independence in 1991, it has faced internal conflicts and tensions with Russia. Georgia is known for its stunning Caucasus mountains and ancient winemaking traditions.</p>
        `,
        "Germany": `
            <h3>History of Germany</h3>
            <p>The unification of Germany in 1871 created a new and powerful nation-state in central Europe. The 20th century was marked by its central role in both World Wars and the subsequent division into East and West Germany during the Cold War. The fall of the Berlin Wall in 1989 and reunification in 1990 marked a pivotal moment. Today, Germany is Europe's largest economy and a leading global power.</p>
        `,
        "Ghana": `
            <h3>History of Ghana</h3>
            <p>Formerly the British colony of the Gold Coast, Ghana was the first sub-Saharan African nation to gain independence, in 1957, under its pan-African leader Kwame Nkrumah. After periods of military rule, Ghana has emerged as one of Africa's most stable and respected democracies. It is a major producer of cocoa and gold.</p>
        `,
        "Greece": `
            <h3>History of Greece</h3>
            <p>Considered the cradle of Western civilization, ancient Greece gave the world democracy, philosophy, drama, and the Olympic Games. After centuries of Roman, Byzantine, and Ottoman rule, the modern Greek state was established in the 19th century. A member of the EU, Greece is celebrated for its immense historical legacy and beautiful islands.</p>
        `,
        "Grenada": `
            <h3>History of Grenada</h3>
            <p>Known as the "Spice Isle," Grenada gained independence from Britain in 1974. A 1979 coup established a Marxist-leaning government, which led to a U.S.-led invasion in 1983. Since then, the country has maintained a stable parliamentary democracy, with an economy based on tourism and spices like nutmeg and mace.</p>
        `,
        "Guatemala": `
            <h3>History of Guatemala</h3>
            <p>The heartland of the ancient Maya civilization, Guatemala was conquered by Spain in the 16th century. Its post-independence history was marred by a long and brutal civil war (1960-1996) that disproportionately affected its indigenous population. The country is still grappling with the war's legacy while showcasing a rich cultural heritage and stunning natural landscapes.</p>
        `,
        "Guinea": `
            <h3>History of Guinea</h3>
            <p>Part of powerful West African empires, Guinea was colonized by France. In 1958, it was the only colony to vote for immediate independence, leading to a complete break with France. The country endured decades of authoritarian rule. Rich in bauxite and other minerals, it remains one of the world's poorest countries and has faced significant political instability.</p>
        `,
        "Guinea-Bissau": `
            <h3>History of Guinea-Bissau</h3>
            <p>A former Portuguese colony, Guinea-Bissau fought a long and difficult war for independence, which was achieved in 1974. Its post-independence history has been marked by extreme political instability, with numerous coups and assassinations. It is one of the world's poorest nations and has struggled with its role as a transit point for drug trafficking.</p>
        `,
        "Guyana": `
            <h3>History of Guyana</h3>
            <p>Originally a Dutch and then a British colony, Guyana's population is a mix of descendants of enslaved Africans and indentured laborers from India. The only English-speaking country in South America, it gained independence in 1966. Its political landscape has often been defined by ethnic tensions. Recent massive offshore oil discoveries are set to transform its economy.</p>
        `,
        "Haiti": `
            <h3>History of Haiti</h3>
            <p>Haiti is the site of the only successful slave rebellion in history, which led to its independence from France in 1804. It was the first independent black republic. However, its history has been plagued by political instability, foreign intervention, and devastating natural disasters, making it the poorest country in the Western Hemisphere, yet it possesses a rich and resilient culture.</p>
        `,
        "Honduras": `
            <h3>History of Honduras</h3>
            <p>Home to the ancient Maya city of Copán, Honduras became a Spanish colony. Its post-independence history has been marked by political instability, military rule, and the influence of U.S. fruit companies, coining the term "banana republic." In recent years, it has struggled with high rates of poverty, corruption, and gang violence.</p>
        `,
        "Hungary": `
            <h3>History of Hungary</h3>
            <p>The Kingdom of Hungary was a major power in Central Europe for centuries before being partly conquered by the Ottomans. Later, it became part of the Austro-Hungarian Empire. After World War II, it fell under communist rule. The 1956 Hungarian Revolution was a major uprising against Soviet domination. Hungary transitioned to democracy in 1989 and is a member of the EU and NATO.</p>
        `,
        "Iceland": `
            <h3>History of Iceland</h3>
            <p>Settled by Norse Vikings in the 9th century, Iceland is home to the Althing, one of the world's oldest parliaments. After centuries of Norwegian and Danish rule, it became a fully independent republic in 1944. Its economy has traditionally been based on fishing, but tourism and renewable energy are now major sectors. It is known for its unique volcanic landscapes.</p>
        `,
        "India": `
            <h3>History of India</h3>
            <p>Home to the ancient Indus Valley Civilization and the birthplace of Hinduism and Buddhism, India's history is long and diverse. It was the "jewel in the crown" of the British Empire before achieving independence in 1947 through a largely non-violent movement led by Mahatma Gandhi. Today, it is the world's largest democracy and a rapidly growing major economy.</p>
        `,
        "Indonesia": `
            <h3>History of Indonesia</h3>
            <p>An archipelago of thousands of islands, Indonesia's history was shaped by powerful maritime empires and its crucial role in the spice trade. After over 300 years of Dutch colonial rule, it declared independence in 1945. After a long period of authoritarian rule, Indonesia has transitioned into a vibrant democracy. It is the world's most populous Muslim-majority nation.</p>
        `,
        "Iran": `
            <h3>History of Iran</h3>
            <p>Historically known as Persia, Iran is one of the world's oldest continuous civilizations. It was home to powerful ancient empires like the Achaemenid and Sasanian. The 1979 Islamic Revolution overthrew the monarchy and established the current Islamic Republic, fundamentally altering its political landscape and relationship with the world.</p>
        `,
        "Iraq": `
            <h3>History of Iraq</h3>
            <p>Known as Mesopotamia, the "cradle of civilization," Iraq was home to the world's earliest cities, writing, and laws. After centuries of Ottoman rule, modern Iraq was created after World War I. The country endured decades of authoritarian rule under Saddam Hussein, followed by wars and prolonged instability after the U.S.-led invasion in 2003.</p>
        `,
        "Ireland": `
            <h3>History of Ireland</h3>
            <p>After centuries of British rule, which included the devastating Great Famine, Ireland's quest for independence culminated in the early 20th century. The Anglo-Irish Treaty of 1921 led to the partition of the island into the Irish Free State (now the Republic of Ireland) and Northern Ireland. Ireland has since transformed into a modern, prosperous European nation.</p>
        `,
        "Israel": `
            <h3>History of Israel</h3>
            <p>The State of Israel was established in 1948 in the ancestral homeland of the Jewish people, following a UN partition plan. Its creation was met with immediate conflict with neighboring Arab states. The history of Israel is one of ongoing conflict with the Palestinians and its neighbors, as well as remarkable economic and technological development.</p>
        `,
        "Italy": `
            <h3>History of Italy</h3>
            <p>The heartland of the Roman Empire and the birthplace of the Renaissance, Italy's influence on Western culture is immense. The Italian peninsula was fragmented for centuries until its unification in 1861. After the fall of fascism in World War II, Italy became a republic and a founding member of the European Union. It is celebrated for its art, architecture, cuisine, and fashion.</p>
        `,
        "Jamaica": `
            <h3>History of Jamaica</h3>
            <p>A former Spanish and then British colony, Jamaica's economy was built on sugar and the labor of enslaved Africans. It gained independence in 1962. Jamaica has had a profound global cultural impact, particularly through reggae music and the Rastafari movement. Its economy is now largely based on tourism and bauxite mining.</p>
        `,
        "Japan": `
            <h3>History of Japan</h3>
            <p>With a history of imperial rule and feudal shoguns, Japan isolated itself from the world for over 200 years. The Meiji Restoration in 1868 led to rapid modernization and the emergence of Japan as a major world power. After its defeat in World War II, Japan renounced war and achieved a remarkable economic recovery, becoming a global leader in technology and innovation.</p>
        `,
        "Jordan": `
            <h3>History of Jordan</h3>
            <p>Created after World War I from the remnants of the Ottoman Empire, the Hashemite Kingdom of Jordan has been a stable monarchy in a volatile region. It has played a crucial role in Middle Eastern diplomacy and has absorbed large numbers of refugees from regional conflicts. The ancient city of Petra is a world-famous archaeological site.</p>
        `,
        "Kazakhstan": `
            <h3>History of Kazakhstan</h3>
            <p>The largest landlocked country in the world, Kazakhstan was home to nomadic peoples before being incorporated into the Russian Empire and then the Soviet Union. Since gaining independence in 1991, it has leveraged its vast mineral and oil resources to fuel economic growth. It has been under the long-term leadership of Nursultan Nazarbayev and his successor.</p>
        `,
        "Kenya": `
            <h3>History of Kenya</h3>
            <p>A British colony known for its white settler population, Kenya's struggle for independence included the Mau Mau Uprising in the 1950s. It gained independence in 1963. Kenya is a major economic and political hub in East Africa, known for its wildlife safaris and athletic prowess. It has faced challenges with political instability and corruption.</p>
        `,
        "Kiribati": `
            <h3>History of Kiribati</h3>
            <p>A Pacific nation of low-lying atolls, Kiribati gained independence from the United Kingdom in 1979. The islands were the site of fierce fighting during World War II, particularly the Battle of Tarawa. Today, Kiribati faces an existential threat from rising sea levels due to climate change.</p>
        `,
        "Kuwait": `
            <h3>History of Kuwait</h3>
            <p>A small, oil-rich emirate on the Persian Gulf, Kuwait was a British protectorate until its independence in 1961. The Iraqi invasion of Kuwait in 1990 led to the First Gulf War. Since its liberation, Kuwait has rebuilt and is known for its high standard of living and significant role in global energy markets.</p>
        `,
        "Kyrgyzstan": `
            <h3>History of Kyrgyzstan</h3>
            <p>A mountainous, landlocked country in Central Asia, Kyrgyzstan was incorporated into the Russian Empire and then the Soviet Union. Since independence in 1991, it has had a more democratic but also more volatile political system than its neighbors, experiencing two revolutions. Its culture is deeply rooted in nomadic traditions.</p>
        `,
        "Laos": `
            <h3>History of Laos</h3>
            <p>The Kingdom of Lan Xang ("Land of a Million Elephants") was a powerful state in Southeast Asia. After French colonial rule, Laos was drawn into the Vietnam War and was heavily bombed. In 1975, the communist Pathet Lao movement took power. Laos remains a one-party state with a gradually opening economy.</p>
        `,
        "Latvia": `
            <h3>History of Latvia</h3>
            <p>After centuries of German, Swedish, and Russian rule, Latvia gained independence in 1918, only to be forcibly incorporated into the Soviet Union in 1940. It regained its independence in 1991. Since then, it has joined the EU and NATO and has re-established itself as a democratic European nation.</p>
        `,
        "Lebanon": `
            <h3>History of Lebanon</h3>
            <p>Home to the ancient Phoenicians, Lebanon has a long history as a multicultural crossroads. After independence from France, it was known as the "Switzerland of the Middle East" before descending into a devastating civil war (1975-1990). The country's delicate sectarian political balance and external interference continue to pose significant challenges.</p>
        `,
        "Lesotho": `
            <h3>History of Lesotho</h3>
            <p>A mountainous kingdom completely encircled by South Africa, Lesotho's origins lie in the 19th-century kingdom of the Basotho people, who resisted Zulu and Boer expansion. It became a British protectorate and gained independence in 1966. Its economy is heavily intertwined with that of South Africa.</p>
        `,
        "Liberia": `
            <h3>History of Liberia</h3>
            <p>Founded by freed American slaves in the 19th century, Liberia is Africa's oldest republic. The country enjoyed relative stability for over a century, but this was shattered by a military coup in 1980, which was followed by two brutal civil wars. The country has been on a path of peace and reconstruction since 2003.</p>
        `,
        "Libya": `
            <h3>History of Libya</h3>
            <p>After being an Italian colony, Libya gained independence as a kingdom. A 1969 coup brought Muammar Gaddafi to power, who ruled for over 40 years. The 2011 Arab Spring uprising led to a civil war, the overthrow of Gaddafi, and a subsequent period of prolonged conflict and political fragmentation between rival governments.</p>
        `,
        "Liechtenstein": `
            <h3>History of Liechtenstein</h3>
            <p>A tiny, doubly landlocked principality in the Alps, Liechtenstein's history is tied to the noble family that gave it its name. It has close ties with Switzerland and is known for its status as a prosperous financial center and tax haven. It is one of the few remaining states of the Holy Roman Empire.</p>
        `,
        "Lithuania": `
            <h3>History of Lithuania</h3>
            <p>In the Middle Ages, the Grand Duchy of Lithuania was the largest state in Europe. It later formed a commonwealth with Poland. After being absorbed by the Russian Empire, Lithuania declared independence in 1918 but was incorporated into the Soviet Union in 1940. It was the first Soviet republic to declare its independence in 1990 and is now a member of the EU and NATO.</p>
        `,
        "Luxembourg": `
            <h3>History of Luxembourg</h3>
            <p>A small country with a complex history, Luxembourg's strategic location meant it was controlled by various European powers for centuries. It gained its independence in the 19th century. A founding member of the EU, Luxembourg is one of the world's wealthiest countries, with a major financial services sector.</p>
        `,
        "Madagascar": `
            <h3>History of Madagascar</h3>
            <p>The fourth largest island in the world, Madagascar's population is a mix of Southeast Asian and African descent. After being ruled by a series of kingdoms, it was colonized by France. Since gaining independence in 1960, it has experienced periods of political instability. It is renowned for its unique biodiversity, including lemurs and baobab trees.</p>
        `,
        "Malawi": `
            <h3>History of Malawi</h3>
            <p>Formerly the British protectorate of Nyasaland, Malawi gained independence in 1964. It was ruled for three decades by the authoritarian Hastings Banda. Since the establishment of a multi-party democracy in 1994, the country has been on a path of development, though it remains one of the world's poorest nations. Its economy is heavily based on agriculture.</p>
        `,
        "Malaysia": `
            <h3>History of Malaysia</h3>
            <p>A multi-ethnic and multi-religious country, Malaysia's history was shaped by its location on ancient maritime trade routes. After British colonial rule, the Federation of Malaya gained independence in 1957 and became Malaysia in 1963. It has since developed into a rapidly industrializing nation with a diverse economy.</p>
        `,
        "Maldives": `
            <h3>History of the Maldives</h3>
            <p>An archipelago in the Indian Ocean, the Maldives was a sultanate for centuries before becoming a British protectorate. It gained independence in 1965 and later became a republic. The country's economy is heavily dependent on luxury tourism. It is one of the countries most threatened by climate change due to its low elevation.</p>
        `,
        "Mali": `
            <h3>History of Mali</h3>
            <p>Mali was home to the great West African empires of Ghana, Mali, and Songhai, with Timbuktu being a legendary center of Islamic scholarship and trade. After French colonial rule, it gained independence in 1960. In recent years, Mali has faced significant challenges from political instability, military coups, and Islamist insurgencies in its northern regions.</p>
        `,
        "Malta": `
            <h3>History of Malta</h3>
            <p>Strategically located in the Mediterranean, Malta has been ruled by a succession of powers, including the Phoenicians, Romans, Knights of St. John, and the British. It played a crucial role in World War II, enduring a heavy siege. It gained independence in 1964 and is now a prosperous member of the European Union, with a tourism-driven economy.</p>
        `,
        "Marshall Islands": `
            <h3>History of the Marshall Islands</h3>
            <p>After being a German and then a Japanese colony, the Marshall Islands became a U.S.-administered Trust Territory after World War II. It was the site of extensive U.S. nuclear testing. It gained independence in 1986 under a Compact of Free Association with the United States. Like other low-lying atoll nations, it is severely threatened by rising sea levels.</p>
        `,
        "Mauritania": `
            <h3>History of Mauritania</h3>
            <p>A bridge between North Africa and sub-Saharan Africa, Mauritania gained independence from France in 1960. Its post-independence history has been marked by military coups and ethnic tensions. Slavery, though officially abolished, remains a persistent issue. The economy is based on iron ore mining and fishing.</p>
        `,
        "Mauritius": `
            <h3>History of Mauritius</h3>
            <p>Uninhabited until the arrival of Europeans, Mauritius was colonized by the Dutch, French, and British. Its diverse population is a legacy of enslaved Africans and indentured laborers from India brought to work on sugar plantations. Since independence in 1968, it has developed into a stable democracy and a diversified, high-income economy.</p>
        `,
        "Mexico": `
            <h3>History of Mexico</h3>
            <p>Home to the great Aztec and Maya civilizations, Mexico was conquered by Spain in the 16th century. It gained its independence in 1821. The 20th century was shaped by the Mexican Revolution. In recent decades, Mexico has transitioned to a multi-party democracy and is a major emerging economy, though it faces challenges with drug-related violence and inequality.</p>
        `,
        "Micronesia": `
            <h3>History of the Federated States of Micronesia</h3>
            <p>A nation of over 600 islands, the Federated States of Micronesia was administered by the United States as part of a Trust Territory after World War II. It gained independence in 1986 under a Compact of Free Association with the U.S. The country is known for its diverse island cultures and pristine marine environments.</p>
        `,
        "Moldova": `
            <h3>History of Moldova</h3>
            <p>Historically part of the Romanian principality of Moldavia, the region was incorporated into the Russian Empire and later the Soviet Union. It declared independence in 1991. The Transnistria region has been a de facto separate state since a brief war in 1992. Moldova is one of Europe's poorest countries and is known for its wine production.</p>
        `,
        "Monaco": `
            <h3>History of Monaco</h3>
            <p>Ruled by the Grimaldi family since 1297, the tiny principality of Monaco has a long history of maintaining its independence. Its economy was transformed in the 19th century with the opening of the Monte Carlo Casino. It is known for its luxury, the Monaco Grand Prix, and its status as a tax haven.</p>
        `,
        "Mongolia": `
            <h3>History of Mongolia</h3>
            <p>In the 13th century, Genghis Khan united the Mongol tribes and created the largest contiguous land empire in history. After the empire's decline, Mongolia came under Chinese rule. It gained independence in the 20th century and became a communist state under Soviet influence. It transitioned to democracy in 1990 and is known for its vast steppes and nomadic culture.</p>
        `,
        "Montenegro": `
            <h3>History of Montenegro</h3>
            <p>With a history of resisting Ottoman rule from its mountainous heartland, Montenegro became part of Yugoslavia after World War I. Following the breakup of Yugoslavia, it remained in a union with Serbia until gaining its independence through a referendum in 2006. It is now a member of NATO and a candidate for EU membership.</p>
        `,
        "Morocco": `
            <h3>History of Morocco</h3>
            <p>Home to powerful Berber and Arab dynasties, Morocco has a rich history as an independent kingdom. It became a French and Spanish protectorate in the 20th century but regained its independence in 1956. The monarchy plays a central role in the country's politics. The status of the Western Sahara region is a long-standing territorial dispute.</p>
        `,
        "Mozambique": `
            <h3>History of Mozambique</h3>
            <p>A former Portuguese colony, Mozambique fought a long war for independence, which was achieved in 1975. This was immediately followed by a devastating civil war that lasted until 1992. The country has since been on a path of peace and economic growth, fueled by recent discoveries of large natural gas reserves.</p>
        `,
        "Myanmar": `
            <h3>History of Myanmar</h3>
            <p>Formerly known as Burma, Myanmar was a British colony until 1948. Its post-independence history has been dominated by long periods of military rule and some of the world's longest-running civil wars with its ethnic minorities. A period of democratic transition in the 2010s was ended by a military coup in 2021, plunging the country back into crisis.</p>
        `,
        "Namibia": `
            <h3>History of Namibia</h3>
            <p>A former German colony, Namibia was the site of the first genocide of the 20th century. It was later ruled by South Africa under its apartheid system. After a long independence struggle, Namibia became a sovereign state in 1990. It is known for its vast desert landscapes, including the Namib Desert, and rich mineral resources.</p>
        `,
        "Nauru": `
            <h3>History of Nauru</h3>
            <p>The world's smallest island nation, Nauru's economy was once entirely dependent on its rich phosphate deposits. For a time, this gave it one of the highest per capita incomes in the world. With the depletion of the phosphate, the country has faced economic collapse and an uncertain future. It is also known for hosting an Australian immigration detention center.</p>
        `,
        "Nepal": `
            <h3>History of Nepal</h3>
            <p>The birthplace of the Buddha, Nepal has a long history as a Himalayan kingdom. It was never formally colonized. A decade-long civil war between Maoist rebels and the government ended in 2006, leading to the abolition of the monarchy and the establishment of a federal democratic republic. It is home to eight of the world's ten tallest mountains, including Mount Everest.</p>
        `,
        "Netherlands": `
            <h3>History of the Netherlands</h3>
            <p>A country famous for its struggle against the sea, the Netherlands rose to become a global maritime and economic power during its "Golden Age" in the 17th century. It was a major colonial power. A founding member of the EU and NATO, the Netherlands is known for its liberal social policies, art history, and vibrant cities.</p>
        `,
        "New Zealand": `
            <h3>History of New Zealand</h3>
            <p>First settled by Māori people, New Zealand became a British colony in 1840 with the signing of the Treaty of Waitangi. It was the first country in the world to grant women the right to vote. Now a prosperous and progressive nation, it is known for its stunning natural landscapes and strong Māori culture.</p>
        `,
        "Nicaragua": `
            <h3>History of Nicaragua</h3>
            <p>Nicaragua's post-independence history has been marked by U.S. intervention and the long dictatorship of the Somoza family. This was overthrown by the Sandinista Revolution in 1979, which was followed by the Contra War in the 1980s. The country has faced ongoing political tensions and challenges with poverty.</p>
        `,
        "Niger": `
            <h3>History of Niger</h3>
            <p>A landlocked nation in West Africa, much of which lies in the Sahara Desert, Niger gained independence from France in 1960. It has faced chronic political instability, with several military coups. It is one of the world's poorest countries, facing challenges from desertification, food insecurity, and regional conflicts.</p>
        `,
        "Nigeria": `
            <h3>History of Nigeria</h3>
            <p>Africa's most populous nation, Nigeria was a British colony created by the amalgamation of northern and southern protectorates. Since independence in 1960, it has endured periods of military rule and a devastating civil war. Now a democracy, it is Africa's largest economy but faces challenges with corruption, ethnic and religious tensions, and the Boko Haram insurgency.</p>
        `,
        "North Korea": `
            <h3>History of North Korea</h3>
            <p>After World War II, Korea was divided, with the north falling under Soviet influence. The Democratic People's Republic of Korea was established in 1948, leading to the Korean War. Since then, North Korea has been a totalitarian state ruled by the Kim dynasty, characterized by a cult of personality, international isolation, and the development of nuclear weapons.</p>
        `,
        "North Macedonia": `
            <h3>History of North Macedonia</h3>
            <p>Formerly part of Yugoslavia, North Macedonia declared its independence peacefully in 1991. For decades, its international recognition was hampered by a dispute with Greece over its name. This was resolved in 2018 with the Prespa Agreement. The country has since joined NATO and is a candidate for EU membership.</p>
        `,
        "Norway": `
            <h3>History of Norway</h3>
            <p>A country with a rich Viking heritage, Norway was in a union with Denmark and then Sweden for centuries before gaining its independence in 1905. The discovery of oil in the North Sea in the 1960s transformed it into one of the world's wealthiest nations. It is known for its stunning fjords, high quality of life, and comprehensive social welfare system.</p>
        `,
        "Oman": `
            <h3>History of Oman</h3>
            <p>With a long history as a maritime trading power, the Omani Empire once stretched to East Africa. In the latter half of the 20th century, under Sultan Qaboos, the country underwent a period of rapid modernization and development, fueled by oil revenues. Oman is known for its policy of neutrality and its role as a mediator in regional conflicts.</p>
        `,
        "Pakistan": `
            <h3>History of Pakistan</h3>
            <p>Created in 1947 from the partition of British India, Pakistan was founded as a homeland for the subcontinent's Muslims. Its history has been marked by periods of military rule, political instability, and conflicts with India, particularly over the Kashmir region. It is a nuclear-armed power and has a diverse and youthful population.</p>
        `,
        "Palau": `
            <h3>History of Palau</h3>
            <p>An island nation in the Pacific, Palau was administered by the United States after World War II and gained its independence in 1994. The Battle of Peleliu was one of the deadliest battles of the Pacific War. Palau is renowned for its pristine marine environment and has taken a leading role in ocean conservation, establishing a large marine sanctuary.</p>
        `,
        "Palestine": `
            <h3>History of Palestine</h3>
            <p>The history of Palestine is a complex narrative of various peoples and empires. In the 20th century, the British Mandate and the rise of Zionism and Arab nationalism led to conflict. The 1948 Arab-Israeli War led to the displacement of hundreds of thousands of Palestinians. The Israeli-Palestinian conflict over land, statehood, and resources remains one of the world's most intractable issues.</p>
        `,
        "Panama": `
            <h3>History of Panama</h3>
            <p>Panama's history has been shaped by its strategic location. It was part of Colombia until 1903, when it seceded with U.S. support to allow for the construction of the Panama Canal. The canal transformed global trade and has been central to Panama's economy. The country has a service-based economy and is a major international banking center.</p>
        `,
        "Papua New Guinea": `
            <h3>History of Papua New Guinea</h3>
            <p>One of the most culturally diverse countries in the world, with over 800 indigenous languages, Papua New Guinea gained independence from Australia in 1975. The rugged terrain has kept many communities isolated. The country is rich in natural resources, but development is hampered by corruption and logistical challenges.</p>
        `,
        "Paraguay": `
            <h3>History of Paraguay</h3>
            <p>A landlocked country in South America, Paraguay's history was marked by long periods of isolationist rule and two devastating wars that decimated its population. The 35-year dictatorship of Alfredo Stroessner ended in 1989. The country has a strong indigenous Guaraní cultural influence, with Guaraní being an official language alongside Spanish.</p>
        `,
        "Peru": `
            <h3>History of Peru</h3>
            <p>The heart of the ancient Inca Empire, Peru was conquered by the Spanish in the 16th century and became a major source of wealth for the Spanish Empire. Since its independence, it has faced periods of political instability. The country is known for its rich archaeological heritage, including Machu Picchu, and its diverse geography, from the Andes to the Amazon.</p>
        `,
        "Philippines": `
            <h3>History of the Philippines</h3>
            <p>An archipelago of over 7,000 islands, the Philippines was a Spanish colony for over 300 years, and then a U.S. territory. This has resulted in a unique cultural blend of Asian and Western influences. It gained independence after World War II. The country's recent history has been marked by periods of authoritarian rule and a vibrant, if sometimes tumultuous, democracy.</p>
        `,
        "Poland": `
            <h3>History of Poland</h3>
            <p>The Polish-Lithuanian Commonwealth was once one of the largest states in Europe. In the late 18th century, Poland was partitioned by its neighbors and disappeared from the map for over a century. It regained its independence after World War I, only to be invaded and devastated in World War II. The Solidarity movement in the 1980s played a key role in the collapse of communism in Eastern Europe.</p>
        `,
        "Portugal": `
            <h3>History of Portugal</h3>
            <p>A major maritime power during the Age of Discovery, Portugal established a vast colonial empire. The 20th century was dominated by the authoritarian Estado Novo regime, which was overthrown by the peaceful Carnation Revolution in 1974. This led to democracy and the decolonization of its African territories. Portugal is a member of the EU and is known for its rich history and culture.</p>
        `,
        "Qatar": `
            <h3>History of Qatar</h3>
            <p>Once a poor British protectorate known for pearling, Qatar has been transformed by the discovery of vast natural gas reserves, giving it one of the highest per capita incomes in the world. It has used this wealth to pursue an ambitious foreign policy, host major international events like the 2022 FIFA World Cup, and develop a modern knowledge-based economy.</p>
        `,
        "Romania": `
            <h3>History of Romania</h3>
            <p>The modern Romanian state was formed in the 19th century from the unification of the principalities of Moldavia and Wallachia. After World War II, it fell under a particularly repressive communist regime led by Nicolae Ceaușescu, which was overthrown in a violent revolution in 1989. Romania has since joined NATO and the EU.</p>
        `,
        "Russia": `
            <h3>History of Russia</h3>
            <p>From Kievan Rus' to the Mongol Empire's influence, the Tsarist empire, the Soviet Union, and the current Russian Federation, Russia's history is one of immense scale and dramatic change. The Russian Revolution of 1917 created the world's first communist state. The collapse of the Soviet Union in 1991 marked the end of the Cold War. Russia remains a major global power.</p>
        `,
        "Rwanda": `
            <h3>History of Rwanda</h3>
            <p>Rwanda's history is tragically marked by the 1994 genocide, in which hundreds of thousands of Tutsis and moderate Hutus were killed. Since then, the country has undergone a remarkable process of reconciliation and economic development under the leadership of Paul Kagame. It is known for its cleanliness, order, and growing tech sector, though questions remain about political freedoms.</p>
        `,
        "Saint Kitts and Nevis": `
            <h3>History of Saint Kitts and Nevis</h3>
            <p>The first British colony in the Caribbean, Saint Kitts was once a rich sugar island. The two-island nation gained independence in 1983. With the decline of the sugar industry, the economy has shifted to tourism and a controversial citizenship-by-investment program. It is the smallest sovereign state in the Western Hemisphere.</p>
        `,
        "Saint Lucia": `
            <h3>History of Saint Lucia</h3>
            <p>Nicknamed the "Helen of the West Indies," Saint Lucia was fought over and changed hands between the French and British 14 times. It gained independence in 1979. The country is known for its stunning natural beauty, particularly the Pitons, and has a strong tourism-based economy.</p>
        `,
        "Saint Vincent and the Grenadines": `
            <h3>History of Saint Vincent and the Grenadines</h3>
            <p>A multi-island nation that gained independence from Britain in 1979, its history includes resistance by the indigenous Caribs against European colonization. The economy is based on agriculture, particularly bananas, and a growing tourism sector focused on yachting and its idyllic islands.</p>
        `,
        "Samoa": `
            <h3>History of Samoa</h3>
            <p>Considered a cradle of Polynesian culture, Samoa was partitioned between Germany and the U.S. in the late 19th century. Western Samoa was administered by New Zealand and became the first independent Polynesian state in 1962. The country, which officially changed its name to Samoa in 1997, has a strong traditional social system known as Fa'a Samoa.</p>
        `,
        "San Marino": `
            <h3>History of San Marino</h3>
            <p>The world's oldest republic, San Marino was founded in 301 AD and has maintained its independence for over 1,700 years. This tiny, landlocked microstate is surrounded by Italy and is known for its medieval walled old town and its unique political system with two heads of state.</p>
        `,
        "Sao Tome and Principe": `
            <h3>History of Sao Tome and Principe</h3>
            <p>Uninhabited when discovered by the Portuguese, these volcanic islands in the Gulf of Guinea became a center of the slave trade and later a major producer of cocoa. After independence in 1975, the country experienced a period of one-party rule before transitioning to a stable multi-party democracy. It is now looking to offshore oil to boost its economy.</p>
        `,
        "Saudi Arabia": `
            <h3>History of Saudi Arabia</h3>
            <p>The birthplace of Islam, the history of Saudi Arabia is deeply intertwined with the faith. The modern kingdom was founded in 1932 by Abdulaziz ibn Saud. The discovery of vast oil reserves has made it one of the world's wealthiest nations and a major player in global politics. It is an absolute monarchy and the custodian of Islam's two holiest sites, Mecca and Medina.</p>
        `,
        "Senegal": `
            <h3>History of Senegal</h3>
            <p>A former French colony and a center of the transatlantic slave trade, Senegal gained independence in 1960. It has been one of West Africa's most stable democracies, having never experienced a military coup. Its first president, Léopold Sédar Senghor, was a celebrated poet and a leading figure in the Négritude movement.</p>
        `,
        "Serbia": `
            <h3>History of Serbia</h3>
            <p>A powerful medieval kingdom, Serbia was under Ottoman rule for five centuries before regaining its independence. It played a central role in the formation of Yugoslavia after World War I. Following the violent breakup of Yugoslavia in the 1990s, Serbia has been on a path of transition and is a candidate for EU membership.</p>
        `,
        "Seychelles": `
            <h3>History of Seychelles</h3>
            <p>Uninhabited until the 18th century, the Seychelles islands were colonized by the French and then the British. They gained independence in 1976. After a period of one-party rule, it transitioned to a multi-party democracy. The economy is heavily reliant on luxury tourism and fishing, with a strong focus on environmental conservation.</p>
        `,
        "Sierra Leone": `
            <h3>History of Sierra Leone</h3>
            <p>Founded as a haven for freed slaves, Freetown was a British colony. The country gained independence in 1961. Its recent history is scarred by a brutal civil war (1991-2002) that was fueled by "blood diamonds." The country has since been on a long road to recovery and has maintained peace.</p>
        `,
        "Singapore": `
            <h3>History of Singapore</h3>
            <p>A small fishing village that was transformed into a major British trading post, Singapore briefly joined Malaysia before becoming an independent nation in 1965. Under its founding father, Lee Kuan Yew, it developed from a low-income country into a global financial hub and one of the most prosperous nations in the world.</p>
        `,
        "Slovakia": `
            <h3>History of Slovakia</h3>
            <p>After a thousand years as part of the Kingdom of Hungary, Slovakia joined with the Czechs to form Czechoslovakia after World War I. Following the collapse of communism, Slovakia peacefully separated from the Czech Republic in the "Velvet Divorce" of 1993. It is now a member of the EU and NATO.</p>
        `,
        "Slovenia": `
            <h3>History of Slovenia</h3>
            <p>The northernmost republic of the former Yugoslavia, Slovenia declared its independence in 1991, which was followed by a brief ten-day war. It has since become a prosperous and stable democracy, joining the EU and NATO in 2004. It is known for its beautiful Alpine scenery and picturesque lakes.</p>
        `,
        "Solomon Islands": `
            <h3>History of the Solomon Islands</h3>
            <p>An archipelago of hundreds of islands, the Solomon Islands were the site of major World War II battles, including the Battle of Guadalcanal. It gained independence from Britain in 1978. The country has faced significant ethnic tensions and political instability, requiring an international peacekeeping mission in the early 2000s.</p>
        `,
        "Somalia": `
            <h3>History of Somalia</h3>
            <p>A former Italian and British colony, Somalia gained independence in 1960. The collapse of its government in 1991 led to decades of civil war, famine, and fragmentation. While a federal government has been established, much of the country remains outside its control, and it faces ongoing challenges from piracy and Islamist insurgencies.</p>
        `,
        "South Africa": `
            <h3>History of South Africa</h3>
            <p>Colonized by the Dutch and then the British, South Africa's history is defined by the system of apartheid, a brutal regime of racial segregation that was implemented in 1948. The struggle against apartheid, led by figures like Nelson Mandela, culminated in the country's first multi-racial democratic elections in 1994. South Africa is now a constitutional democracy but still grapples with the legacy of apartheid, including high levels of inequality.</p>
        `,
        "South Korea": `
            <h3>History of South Korea</h3>
            <p>Following World War II, Korea was divided, with the south under American influence. The Republic of Korea was established in 1948. The devastating Korean War (1950-1953) left the peninsula divided. South Korea has since transformed itself from a poor, agrarian country into a major global economy and a vibrant democracy, known for its technological prowess and cultural exports (the "Korean Wave").</p>
        `,
        "South Sudan": `
            <h3>History of South Sudan</h3>
            <p>The world's newest country, South Sudan gained independence from Sudan in 2011 after decades of civil war. Hopes for a peaceful future were shattered in 2013 when a new civil war broke out, leading to a severe humanitarian crisis. The country is rich in oil but remains one of the poorest and least developed in the world.</p>
        `,
        "Spain": `
            <h3>History of Spain</h3>
            <p>A country with a rich history of Roman and Moorish influence, Spain's unification in the 15th century was followed by the Age of Discovery, which saw it build a vast global empire. The 20th century was marked by a devastating civil war and the long dictatorship of Francisco Franco. After Franco's death in 1975, Spain transitioned to a vibrant democracy and is a member of the EU.</p>
        `,
        "Sri Lanka": `
            <h3>History of Sri Lanka</h3>
            <p>Formerly known as Ceylon, Sri Lanka has a long and rich history of Sinhalese and Tamil kingdoms. After being a Portuguese and Dutch colony, it came under British rule. Since independence in 1948, the country's history has been dominated by a long and brutal civil war (1983-2009) between the government and the Tamil Tigers. The country has been rebuilding since the war's end.</p>
        `,
        "Sudan": `
            <h3>History of Sudan</h3>
            <p>The largest country in Africa until the secession of South Sudan, Sudan has a history of ancient kingdoms and was later under Egyptian and British rule. Its post-independence history has been marked by long civil wars between the north and the south, as well as the conflict in Darfur. The country has faced significant political instability, including military coups.</p>
        `,
        "Suriname": `
            <h3>History of Suriname</h3>
            <p>A former Dutch colony on the northeastern coast of South America, Suriname's population is one of the most ethnically diverse in the world, with descendants of enslaved Africans, and indentured laborers from India, Indonesia, and China. It gained independence in 1975 and has experienced periods of military rule and political instability.</p>
        `,
        "Sweden": `
            <h3>History of Sweden</h3>
            <p>A major European power in the 17th and 18th centuries, Sweden has not participated in a war for over 200 years, maintaining a long-standing policy of neutrality. It has developed into a prosperous nation with a strong social welfare system and a high standard of living. Sweden is a constitutional monarchy and a member of the European Union.</p>
        `,
        "Switzerland": `
            <h3>History of Switzerland</h3>
            <p>A confederation of cantons with a long history of armed neutrality, Switzerland has not been in a state of war internationally since 1815. It is known for its banking and financial services, high quality of life, and its system of direct democracy. It is not a member of the European Union but has close ties with the bloc.</p>
        `,
        "Syria": `
            <h3>History of Syria</h3>
            <p>Located at an ancient crossroads of civilizations, Syria has a rich history but has been at the center of conflict for much of the 21st century. After independence from France, the country was ruled by the Ba'ath Party from the 1960s. A 2011 uprising against the rule of Bashar al-Assad descended into a complex and devastating civil war that has involved multiple international actors and caused a massive humanitarian crisis.</p>
        `,
        "Taiwan": `
            <h3>History of Taiwan</h3>
            <p>Inhabited by indigenous peoples, Taiwan was a Dutch colony, then under Chinese imperial rule. It was ceded to Japan in 1895. After World War II, it was taken over by the Republic of China (ROC) government, which fled the mainland after losing the Chinese Civil War. The political status of Taiwan, which has developed into a vibrant democracy and a major technological economy, is a subject of ongoing international dispute.</p>
        `,
        "Tajikistan": `
            <h3>History of Tajikistan</h3>
            <p>A mountainous, landlocked country in Central Asia, Tajikistan was part of various Persian empires before being conquered by the Russian Empire and later incorporated into the Soviet Union. It gained independence in 1991, which was immediately followed by a devastating civil war. The country is the poorest in Central Asia and has been under the long-standing rule of President Emomali Rahmon.</p>
        `,
        "Tanzania": `
            <h3>History of Tanzania</h3>
            <p>The modern nation of Tanzania was formed in 1964 by the union of Tanganyika and Zanzibar. Tanganyika was a German and then a British colony, while Zanzibar was a sultanate. Under its first president, Julius Nyerere, the country pursued a policy of African socialism. Tanzania is known for its vast wilderness areas, including the Serengeti and Mount Kilimanjaro.</p>
        `,
        "Thailand": `
            <h3>History of Thailand</h3>
            <p>Formerly known as Siam, Thailand is the only country in Southeast Asia that was never colonized by a European power. Its history is one of powerful kingdoms and a constitutional monarchy. The country has experienced numerous military coups in its modern history. Thailand is a major tourist destination, known for its beautiful beaches, temples, and cuisine.</p>
        `,
        "Timor-Leste": `
            <h3>History of Timor-Leste</h3>
            <p>A former Portuguese colony, Timor-Leste (East Timor) declared its independence in 1975, only to be invaded and occupied by Indonesia nine days later. A long and brutal struggle for independence followed, culminating in a UN-sponsored referendum in 1999. After a period of UN administration, it became the first new sovereign state of the 21st century in 2002.</p>
        `,
        "Togo": `
            <h3>History of Togo</h3>
            <p>A former German and then French colony, Togo gained independence in 1960. Its post-independence history was dominated for nearly four decades by the authoritarian rule of Gnassingbé Eyadéma. After his death, his son came to power. The country has faced ongoing political tensions and calls for democratic reform.</p>
        `,
        "Tonga": `
            <h3>History of Tonga</h3>
            <p>The only remaining kingdom in the Pacific, Tonga was never formally colonized by a European power. It became a British protected state but maintained its sovereignty. In recent years, Tonga has been on a path of democratic reform. The country is an archipelago of over 170 islands and is susceptible to natural disasters like cyclones and volcanic eruptions.</p>
        `,
        "Trinidad and Tobago": `
            <h3>History of Trinidad and Tobago</h3>
            <p>A two-island nation in the Caribbean, Trinidad was a Spanish and then a British colony, while Tobago changed hands among several European powers. The population is a diverse mix of descendants of enslaved Africans and indentured laborers from India. The country's economy is one of the most prosperous in the Caribbean, based on its large oil and natural gas reserves.</p>
        `,
        "Tunisia": `
            <h3>History of Tunisia</h3>
            <p>The site of the ancient city of Carthage, Tunisia was a Roman province, then under Arab and Ottoman rule before becoming a French protectorate. It gained independence in 1956. In 2011, a popular uprising in Tunisia overthrew its long-time president, sparking the Arab Spring across the region. It has since been on a challenging path towards establishing a stable democracy.</p>
        `,
        "Turkey": `
            <h3>History of Turkey</h3>
            <p>The modern Republic of Turkey was founded in 1923 from the remnants of the Ottoman Empire by its national hero, Mustafa Kemal Atatürk. He led a series of sweeping reforms to create a modern, secular, and Western-oriented state. Turkey is a major regional power, a member of NATO, and has been a long-time candidate for EU membership.</p>
        `,
        "Turkmenistan": `
            <h3>History of Turkmenistan</h3>
            <p>A country in Central Asia with a history linked to the Silk Road, Turkmenistan was incorporated into the Russian Empire and then the Soviet Union. Since independence in 1991, it has been one of the most authoritarian and isolated countries in the world, characterized by a pervasive cult of personality around its leaders. Its economy is heavily dependent on its vast natural gas reserves.</p>
        `,
        "Tuvalu": `
            <h3>History of Tuvalu</h3>
            <p>A small Pacific island nation, Tuvalu was formerly part of the British colony of the Gilbert and Ellice Islands. It gained independence in 1978. One of the world's smallest and most remote countries, it faces an existential threat from rising sea levels due to climate change. Its national internet domain, .tv, is a significant source of revenue.</p>
        `,
        "Uganda": `
            <h3>History of Uganda</h3>
            <p>A British protectorate that gained independence in 1962, Uganda's post-independence history was marked by the brutal dictatorship of Idi Amin in the 1970s and a long civil war. The country has had a period of relative stability and economic growth since the late 1980s under President Yoweri Museveni. Tourism, particularly to see its mountain gorillas, is a key industry.</p>
        `,
        "Ukraine": `
            <h3>History of Ukraine</h3>
            <p>With a history dating back to the medieval state of Kievan Rus', Ukraine has for centuries been under the domination of its more powerful neighbors, particularly Poland and Russia. It experienced a brief period of independence after World War I and a devastating famine in the 1930s under Soviet rule. It gained its independence with the collapse of the Soviet Union in 1991. The 21st century has been marked by the 2014 annexation of Crimea by Russia and the full-scale invasion by Russia in 2022.</p>
        `,
        "United Arab Emirates": `
            <h3>History of the United Arab Emirates</h3>
            <p>A federation of seven emirates, the UAE was formed in 1971. Previously known as the Trucial States, the emirates were a British protectorate. The discovery of oil has transformed the country from a small desert nation into a major global hub for finance, trade, and tourism, known for its futuristic cities like Dubai and Abu Dhabi.</p>
        `,
        "United Kingdom": `
            <h3>History of the United Kingdom</h3>
            <p>The United Kingdom is a state made up of England, Scotland, Wales, and Northern Ireland. It was the center of the vast British Empire, which at its height was the largest in history. The UK was a pioneer of the Industrial Revolution and parliamentary democracy. It played a leading role in both World Wars and is a major global player in finance, culture, and politics. In 2020, it left the European Union.</p>
        `,
        "United States": `
            <h3>History of the United States</h3>
            <p>Founded by 13 British colonies that declared independence in 1776, the United States has grown into a global superpower. Its history is marked by westward expansion, the Civil War over the issue of slavery, and its rise to global prominence in the 20th century. It is a federal republic with a diverse population and a powerful economy and military.</p>
        `,
        "Uruguay": `
            <h3>History of Uruguay</h3>
            <p>After being a contested territory between the Spanish and Portuguese empires, Uruguay gained its independence in the 19th century. It developed into one of Latin America's most stable and progressive nations. After a period of military dictatorship in the late 20th century, it has re-established its democratic traditions and is known for its high standard of living and liberal social policies.</p>
        `,
        "Uzbekistan": `
            <h3>History of Uzbekistan</h3>
            <p>Located in the heart of Central Asia, Uzbekistan was a key center of the ancient Silk Road, with historic cities like Samarkand and Bukhara. It was incorporated into the Russian Empire and then the Soviet Union. Since independence in 1991, it has been ruled by authoritarian governments. The country is a major producer of cotton and natural gas.</p>
        `,
        "Vanuatu": `
            <h3>History of Vanuatu</h3>
            <p>An archipelago of over 80 islands in the South Pacific, Vanuatu was jointly administered by the British and French as the New Hebrides. It gained independence in 1980. The country is known for its cultural diversity, active volcanoes, and pristine coral reefs. It is considered one of the most vulnerable nations to natural disasters.</p>
        `,
        "Vatican City": `
            <h3>History of Vatican City</h3>
            <p>The world's smallest independent state, Vatican City is the center of the Roman Catholic Church. Its history is intertwined with that of the Papacy and the Papal States, which once controlled large parts of Italy. The modern state was created in 1929 by the Lateran Treaty with Italy. It is an ecclesiastical and sacerdotal-monarchical state ruled by the Pope.</p>
        `,
        "Venezuela": `
            <h3>History of Venezuela</h3>
            <p>After gaining independence from Spain in the early 19th century, Venezuela's history has been marked by periods of political instability and military rule. It is a major oil producer and was one of the most prosperous countries in Latin America. However, in the 21st century, the country has been plunged into a severe economic, social, and political crisis.</p>
        `,
        "Vietnam": `
            <h3>History of Vietnam</h3>
            <p>With a long history of resisting Chinese domination, Vietnam was later colonized by the French. After independence, the country was divided into a communist north and a non-communist south, leading to the devastating Vietnam War. The country was unified under communist rule in 1975. It has since undergone significant economic reforms and has one of the fastest-growing economies in the world.</p>
        `,
        "Yemen": `
            <h3>History of Yemen</h3>
            <p>With an ancient history as a center of trade, Yemen was divided for much of the 20th century into North and South Yemen. The two states unified in 1990. The country has been plagued by political instability and poverty. In the 2010s, it descended into a brutal civil war that has caused a massive humanitarian crisis.</p>
        `,
        "Zambia": `
            <h3>History of Zambia</h3>
            <p>Formerly the British protectorate of Northern Rhodesia, Zambia gained its independence in 1964. Its economy has been heavily dependent on copper mining. After a long period of one-party rule, Zambia transitioned to a multi-party democracy in the 1990s. It is known for the spectacular Victoria Falls, which it shares with Zimbabwe.</p>
        `,
        "Zimbabwe": `
            <h3>History of Zimbabwe</h3>
            <p>Formerly known as Southern Rhodesia, the country was a British colony. The white minority government's unilateral declaration of independence in 1965 led to international sanctions and a guerrilla war. The country gained internationally recognized independence in 1980. The long rule of Robert Mugabe was marked by economic decline and political repression. The country is rich in natural resources and is home to the ancient stone city of Great Zimbabwe.</p>
        `
    };

    // This loop will add a generic message for any country not explicitly defined in countryInfo above.
    // You can remove this loop if you intend to define every single country's info manually.
    countries.forEach(country => {
        if (!countryInfo[country]) {
            countryInfo[country] = `<p>No specific information available for <strong>${country}</strong> yet.</p>
                                   <p>Please add content for this country in the <code>countryInfo</code> object in <code>script.js</code>.</p>`;
        }
    });

    // DOM refs
    const countryList = document.getElementById('country-list');
    const bottomSheet = document.getElementById('bottom-sheet');
    const bottomSheetTitle = document.getElementById('bottom-sheet-title');
    const bottomSheetInfo = document.getElementById('bottom-sheet-info');

    // Build list
    countries.forEach(country => {
        const listItem = document.createElement('li');
        listItem.textContent = country;
        listItem.addEventListener('click', () => openBottomSheet(country));
        countryList.appendChild(listItem);
    });

    // Sheet open/close
    function openBottomSheet(country) {
        bottomSheetTitle.textContent = country;
        bottomSheetInfo.innerHTML = countryInfo[country];
        bottomSheet.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    window.closeBottomSheet = function () {
        bottomSheet.classList.remove('open');
        document.body.style.overflow = 'auto';
    };

    bottomSheet.addEventListener('click', (event) => {
        if (event.target === bottomSheet) {
            window.closeBottomSheet();
        }
    });

    // 🎂 Birthday popup
    const today = new Date();
    const isMaxBirthday = today.getDate() === 2 && today.getMonth() === 7; // August 2

    if (isMaxBirthday) {
        const birthdayPopup = document.createElement('div');
        birthdayPopup.className = 'birthday-popup';
        birthdayPopup.innerHTML = `
            <h2>Happy Birthday, Max!</h2>
            <p>Wishing you a fantastic day filled with joy and laughter!</p>
            <button onclick="document.body.removeChild(this.parentElement)">Close</button>
        `;
        document.body.appendChild(birthdayPopup);
    }

// 🔍 Search logic
const searchInput = document.getElementById('country-search');
const clearButton = document.getElementById('clear-search');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const countryItems = document.querySelectorAll('#country-list li');

    // Show or hide the clear button
    clearButton.classList.toggle('hidden', query.length === 0);

    // Filter countries
    countryItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'block' : 'none';
    });
});

clearButton.addEventListener('click', () => {
    searchInput.value = '';
    clearButton.classList.add('hidden');

    const countryItems = document.querySelectorAll('#country-list li');
    countryItems.forEach(item => {
        item.style.display = 'block';
    });

    searchInput.focus();
});
});