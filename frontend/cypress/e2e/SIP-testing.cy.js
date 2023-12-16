// mengakses URL website SIP
beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('http://localhost:5173');
    cy.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught Exception:', err.message);
        return false;
        }
    );
});

// validasi isi konten dalam Landing Page
// describe('Landing Page', () => {
//     it('successfully accessed Landing Page', () => {
//         cy.contains('Kenali Proses Pemilu dengan Lebih Dekat');
//         cy.contains('Ayo Bergabung di Forum Kami').click();
//         cy.contains('Partai Politik');
//     });

//     it('successfully accessed Pelajari Pemilu 2024', () => {
//         cy.contains('Pelajari Pemilu 2024');
//         cy.get('a:contains("Klik untuk membaca")').eq(0).click();
//         cy.go('back');
//     });

//     it('successfully accessed Capres dan Cawapres 2024', () => {
//         cy.contains('Capres dan Cawapres 2024');

//         // open card Calon 1
//         cy.get('a:contains("Lihat Profil Calon")').eq(2).click();
//         cy.contains('Deskripsi').click();
//         cy.contains('Visi').click();
//         cy.contains('Misi').click();
//         cy.go('back');

//         // open card Calon 2
//         cy.get('a:contains("Lihat Profil Calon")').eq(1).click();
//         cy.contains('Deskripsi').click();
//         cy.contains('Visi').click();
//         cy.contains('Misi').click();
//         cy.go('back');

//         // open card Calon 3
//         cy.get('a:contains("Lihat Profil Calon")').eq(0).click();
//         cy.contains('Deskripsi').click();
//         cy.contains('Visi').click();
//         cy.contains('Misi').click();
//         cy.go('back');
//     });

//     it('successfully accessed Kilas Balik Pemilu 2019', () => {
//         cy.contains('Kilas Balik Pemilu 2019');
//         cy.get('a:contains("Klik untuk membaca")').eq(1).click();
//         cy.contains('Presiden').click();
//         cy.go('back');
//     });
// });

// mengakses Partai Page dari Landing Page
// describe('Partai Page', () => {
//     beforeEach(() => {
//         cy.viewport(1920, 1080);
//         cy.visit('http://localhost:5173');
//         cy.on('uncaught:exception', (err, runnable) => {
//             console.error('Uncaught Exception:', err.message);
//             return false;
//             }
//         );

//         cy.contains('Partai').click();
//         cy.url().should('include', '/partai-politik');
//     });

//     it('successfully accessed Partai Page', async () => {
//         // validasi kelengkapan partai (24 partai)
//         cy.contains('Partai Kebangkitan Nusantara (PKN)');
//         cy.contains('Partai Hati Nurani Rakyat (Hanura)');
//         cy.contains('Partai Demokrat');
//         cy.contains('Partai Kebangkitan Bangsa (PKB)');
//         cy.contains('Partai Demokrasi Indonesia Perjuangan (PDI-P)');
//         cy.contains('Partai Darul Aceh (PDA)');
//         cy.contains('Partai Gelombang Rakyat Indonesia (Gelora)');
//         cy.contains('Partai Persatuan Pembangunan (PPP)');
//         cy.contains('Partai Aceh');
//         cy.contains('Partai Adil Sejahtera Aceh (PAS Aceh)');
//         cy.contains('Partai Persatuan Indonesia (Perindo)');
//         cy.contains('Partai Bulan Bintang (PBB)');
//         cy.contains('Partai Soliditas Independent Rakyat Aceh (SIRA)');
//         cy.contains('Partai Garda Perubahan Indonesia (Garuda)');
//         cy.contains('Partai Nasional Demokrat (NasDem)');
//         cy.contains('Partai Gerakan Indonesia Raya (Gerindra)');
//         cy.contains('Partai Ummat');
//         cy.contains('Partai Nangroe Aceh (PNA)');
//         cy.contains('Partai Amanat Nasional (PAN)');
//         cy.contains('Partai Golongan Karya (Golkar)');
//         cy.contains('Partai Buruh');
//         cy.contains('Partai Keadilan Sejahtera (PKS)');
//         cy.contains('Partai Solidaritas Indonesia (PSI)');
//         cy.contains("Partai Generasi Atjeh Beusaboh Tha'at Dan Taqwa (Gabthat)");
//     });

//     it('find partai using the search bar', () => {
//         cy.get('input[placeholder="Search"]').type('demo{enter}');
//         cy.wait(1000);
//         cy.get('input[placeholder="Search"]').clear().type('hampura{enter}');
//         cy.wait(1000);
//     });
    
//     it('successfully accessed Detail Partai Page', async () => {
//         const response = await fetch('http://localhost:5000/partaiInfos');
//         const partai = await response.json();
//         partai.map(({_id, website, ig_sosmed, fb_sosmed}) => {
//             // clicks all "View here" button
//             cy.get(`a[href^="/partai-politik/${_id}"]`).click()
//             // akses isi Detail Partai Page
//             cy.contains('Deskripsi').click()
//             cy.contains('Tokoh').click()
//             cy.contains('Fakta Unik').click()

//             // cek social media partai
//             if (website != ''){cy.contains(`${website}`)}
//             if (ig_sosmed != ''){cy.contains(`${ig_sosmed}`)}
//             if (fb_sosmed != ''){cy.contains(`${fb_sosmed}`)}
//             cy.go('back')
//         });
//     });
// });


// akses Forum Page sebelum login
describe('Forum Page', () => {
    it('successfully accessed Forum Page', () => {
        cy.contains('Forum').click();
        cy.url().should('include', '/forum')
    });
});



// describe('Login Page', () => {
//     it('should login by email', () => {
//         cy.contains('Login').click();
//         {
//             auth: {
//             username: 'wile',
//             password: 'coyote',
//           }
//         }
//     });
// });
