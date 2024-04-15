//HW1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  console.log(myBlend(arr));

  //HW2 
const company = {
    name: 'Велика Компанія', 
    type:'Головна компанія', 
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1', 
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків'
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків'
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
  
  function findValueByKey(companyName) {
    if (typeof companyName !== 'string') {
      return null;
    }
    function findCompany(companies, name) {
      for (const company of companies) {
        if (company.name === name) {
          return company;
        }
        if (company.clients) {
          const foundClient = findCompany(company.clients, name);
          if (foundClient) {
            return foundClient;
          }
        }
        if (company.partners) {
          const foundPartner = findCompany(company.partners, name);
          if (foundPartner) {
            return foundPartner;
          }
        }
      }
      return null;
    }
    return findCompany([company], companyName);
  }
  
  const companyInfo = findValueByKey('Клієнт 1.2.3');
  console.log(companyInfo);

