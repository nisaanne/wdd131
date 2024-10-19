{let lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "This document was last modified on: " + lastModifiedDate;}

    
    const products = [
        {
          id: "fc-1888",
          name: "flux capacitor",
          averagerating: 4.5
        },
        {
          id: "fc-2050",
          name: "power laces",
          averagerating: 4.7
        },
        {
          id: "fs-1987",
          name: "time circuits",
          averagerating: 3.5
        },
        {
          id: "ac-2000",
          name: "low voltage reactor",
          averagerating: 3.9
        },
        {
          id: "jj-1969",
          name: "warp equalizer",
          averagerating: 5.0
        }
      ];
      
      
       
 
        // Populate the select options
        const productList = document.getElementById("product_name");
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productList.appendChild(option);
        });
    
        
        if (localStorage.getItem('reviewCount')) {
            let reviewCount = parseInt(localStorage.getItem('reviewCount'));
            document.getElementById('review-count').textContent = 'You have submitted ' + reviewCount + ' review(s).';
        } else {
            localStorage.setItem('reviewCount', 0);
            document.getElementById('review-count').textContent = 'You have submitted 0 review(s).';
        }
    
           document.getElementById('reviewForm').addEventListener('submit', function(event) {
            event.preventDefault();
            let reviewCount = parseInt(localStorage.getItem('reviewCount')) + 1;
            localStorage.setItem('reviewCount', reviewCount);
            document.getElementById('review-count').textContent = 'You have submitted ' + reviewCount + ' review(s).';
            alert('Review submitted successfully!');
        });
    
    

    
   


