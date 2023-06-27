import React from "react";

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         productList: [
            {
                id: 1,
                productName: 'Women Floral Print Pure Cotton A line Kurta  (Pink)',
                productPrice: 'Rs. 639.00',
                productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/f/g/x/xl-skd-divyanjni-original-imagqypfngrurfzc.jpeg?q=70'

            },

            {
                id: 2,
                productName: 'Women Solid Georgette Frontslit Kurta  (Light Green)',
                productPrice: 'Rs. 329.00',
                productImg: 'https://rukminim1.flixcart.com/image/612/612/kbgu1e80/kurta/m/z/b/3xl-spk1047-spera-original-imafst6yygw6bhxy.jpeg?q=70'
            },

            {
                id: 3,
                productName: 'Women Floral Print Pure Cotton Straight Kurta (White)',
                productPrice: 'Rs. 400.00',
                productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/6/g/8/m-tny009-taniya-fashion-original-imagp2nvkp48ucxk.jpeg?q=70'
            },

            {
                id: 4,
                productName: 'Women Embroidered Viscose Rayon Anarkali Kurta  (Blue)',
                productPrice: 'Rs. 435.00',
                productImg: 'https://rukminim1.flixcart.com/image/612/612/xif0q/shopsy-kurta/b/2/g/l-kk-blue-rr-febtex-fashions-original-imagqkz3a8r9jhzx.jpeg?q=70'
            },

            {
                id: 5,
                productName: 'Women Embroidered Viscose Rayon Anarkali Kurta  (Dark Green)',
                productPrice: 'Rs. 500.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-kurta/q/c/l/xl-kk-green-rr-febtex-fashions-original-imagqkyh93grkcdy.jpeg?q=70'
            },

            {
                id: 6,
                productName: 'Women Printed Cotton Rayon Flared Kurta  (Purple)',
                productPrice: 'Rs. 466.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/d/d/1/xl-rf-220-wine-new4u-original-imagp7x28wd7nzfm.jpeg?q=70'
            },

            {
                id: 7,
                productName: 'Women Floral Print Viscose Rayon Ethnic Dress  (Purple)',
                productPrice: 'Rs. 600.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/7/2/z/xl-pt-177-astilbee-original-imagmrshgmydd9du.jpeg?q=70'

            },
            {
                id: 8,
                productName: 'Anarkali Kurta With Attached Dupatta  (Black, White)',
                productPrice: 'Rs. 610.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/f/x/8/3xl-bandhani-kurti-pmd-fashion-original-imagqcxskhah5cvm.jpeg?q=70'
            },

            {
                id: 9,
                productName: 'Anarkali Kurta With Attached Dupatta  (Maroon)',
                productPrice: 'Rs. 700.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/e/1/b/xl-bandhani-kurti-pmd-fashion-original-imagqcxscv9geyzf.jpeg?q=70'        
            
            },

            {
                id: 10,
                productName: 'Women Floral Print Viscose Rayon A-line Kurta  (Yellow)',
                productPrice: 'Rs. 498.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/0/7/j/l-kc01-c-new-chandafeb-original-imagmpguzyzf2kgg.jpeg?q=70'
            },

            {
                id: 11,
                productName: 'Women Self Design Cotton Blend Straight Kurta  (Green)',
                productPrice: 'Rs. 444.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/kwjkuq80/kurta/b/p/a/l-hrk0016-hritika-original-imag973c86pzv2vz.jpeg?q=70'
            },

            {
                id: 12,
                productName: 'Women Printed Viscose Rayon Frontslit Kurta  (Green)',
                productPrice: 'Rs. 349.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/9/1/e/m-as162-aasiya-original-imagp4f9cz76n3me.jpeg?q=70'
            },

            {
                id: 13,
                productName: 'Women Floral Print Pure Cotton Straight Kurta  (White)',
                productPrice: 'Rs. 498.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/k91o6fk0/kurta/j/w/h/m-ya7508-aks-original-imafqxe5hzevhj6f.jpeg?q=70'
            },

            {
                id: 14,
                productName: 'Women Printed Cotton Blend Anarkali Kurta  (Green)',
                productPrice: 'Rs. 599.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/t/4/d/xxl-h-n-311-s-h-n-original-imagf9zzrrrgwu7x.jpeg?q=70'

            },

            {
                id: 15,
                productName: 'Women Self Design Cotton Blend Straight Kurta  (Multicolor)',
                productPrice: 'Rs. 630.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/kwjkuq80/kurta/7/m/5/m-hrk0016-hritika-original-imag973cermmjege.jpeg?q=70'

            },

            {
                id: 16,
                productName: 'Women Embroidered Pure Cotton A-line Kurta  (Light Green, White)',
                productPrice: 'Rs. 351.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/f/z/0/xl-squareemb01-lightgreen-vividh-creations-original-imagpgxyqjaphkbr.jpeg?q=70'
            },

            {
                id: 17,
                productName: 'Floral Print Semi Stitched Lehenga Choli  (Blue)',
                productPrice: 'Rs. 700.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/g/0/m/free-sleeveless-zip1434-zinariya-fab-original-imagnftyaaaqjexa.jpeg?q=70'
            },

            {
                id: 18,
                productName: 'Solid Semi Stitched Lehenga Choli  (Black)',
                productPrice: 'Rs. 277.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/l4hcx3k0/lehenga-choli/e/h/g/free-full-sleeve-1-craze-n-world-original-imagfd67shv6te9g.jpeg?q=70'
            },

            {
                id: 19,
                productName: 'Solid Semi Stitched Lehenga Choli  (Grey, Blue)',
                productPrice: 'Rs. 750.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/kjhgzgw0-0/lehenga-choli/l/j/j/free-sleeveless-zeqard-01-vajiba-original-imafzfezgegvuhvy.jpeg?q=70'
            },

            {
                id: 20,
                productName: 'Embroidered Semi Stitched Lehenga Choli  (Red)',
                productPrice: 'Rs. 789.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/ku2zjww0/lehenga-choli/v/t/f/free-full-sleeve-future-red-goroly-original-imag7afhzhhdsawj.jpeg?q=70'
            },

            {
                id: 21,
                productName: 'Women Embroidered Cotton Rayon Straight Kurta  (Black)',
                productPrice: 'Rs. 650.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/k6tniq80/kurta/f/s/f/m-vnku007354-vishudh-original-imafp6yyzhachzck.jpeg?q=70'
            },

            {
                id: 22,
                productName: 'Women Printed Viscose Rayon Straight Kurta  (Yellow)',
                productPrice: 'Rs. 440.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/l2arp8w0/kurta/c/9/h/4xl-mona-mustard-wilshire-original-imagdzgfgwdqvbkh.jpeg?q=70'

            },

            {
                id: 23,
                productName: 'Women Printed Viscose Rayon Straight Kurta  (Green)',
                productPrice: 'Rs. 460.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/l5fnhjk0/kurta/w/t/s/l-mona-green-wilshire-original-imagg47gzc8ncnfe.jpeg?q=70'
            },

            {
                id: 24,
                productName: 'Women Printed Viscose Rayon Straight Kurta  (Grey)',
                productPrice: 'Rs. 460.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/l2arp8w0/kurta/d/i/a/3xl-mona-grey-wilshire-original-imagdzgfzje3pqvx.jpeg?q=70'
            },

            {
                id: 25,
                productName: 'Women Embroidered, Striped Cotton Blend Straight Kurta  (White)',
                productPrice: 'Rs. 477',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/kavefm80/kurta/m/g/g/s-w11-aaysa-original-imafschzfwjutnfj.jpeg?q=70'
            },

            {
                id: 26,
                productName: 'Women Embroidered Viscose Rayon A-line Kurta  (Blue)',
                productPrice: 'Rs. 496.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/n/t/g/xxl-red-sleeveless-krishna-creations-original-imagzt2yct4zvtk2.jpeg?q=70'
                
            },

            {
                id: 27,
                productName: 'Women Embroidered Viscose Rayon A-line Kurta  (Green)',
                productPrice: 'Rs. 471.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/g/m/b/xxl-green-sleeveless-krishna-creations-original-imagzt2ykm6mqzkm.jpeg?q=70'
            },

            {
                id: 28,
                productName: 'Women Embellished Silk Blend Straight Kurta  (Pink)',
                productPrice: 'Rs. 968.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/l3lx8cw0/kurta/x/e/w/m-23513o-libas-original-imagezz83zggqe9n.jpeg?q=70'
            },

            {
                id: 29,
                productName: 'Women Printed Georgette Gown Kurta  (Green)',
                productPrice: 'Rs. 598.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/l4ln8nk0/gown/h/t/x/na-xl-half-sleeve-stitched-al-170-vintage-colour-na-original-imagfgmkkfeyagxa.jpeg?q=70'
            },

            {
                id: 30,
                productName: 'Women Floral Print Georgette Gown Kurta  (Blue)',
                productPrice: 'Rs. 589.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/t/x/i/l-st-22-black-scissor-original-imagh6fxrkae46vz.jpeg?q=70'
            },

            {
              
                id: 31,
                productName: 'Women Printed Georgette Gown Kurta  (Brown)',
                productPrice: 'Rs. 590.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/l0wrafk0/shopsy-dress/a/c/v/xxl-08-aa-shpsy-black-scissor-original-imagch8ze4zggyfk.jpeg?q=70'  
            },

            {
                id: 32,
                productName: 'Women Chikan Embroidery Georgette Straight Kurta  (Black)',
                productPrice: 'Rs. 1,198',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/ktlu9ow0/kurta/8/a/7/l-kurti-7-l-tamana-fashion-collection-original-imag6x6gfzaunhff.jpeg?q=70'
            },

            {
                id: 33,
                productName: 'Women Embellished Georgette Anarkali Kurta With Attached Dupatta  (Blue)',
                productPrice: 'Rs. 565.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/d/h/a/xl-jashavi-pmd-fashion-original-imaghhpqyzsvpvfw.jpeg?q=70'
            },

            {
                id: 34,
                productName: 'Women Floral Print Pure Cotton Frontslit Kurta  (Blue)',
                productPrice: 'Rs. 447.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/v/v/p/l-flower-01-gajari-zivapez-original-imaggzhfcneq5nfh.jpeg?q=70'
            },

            {
                id: 35,
                productName: 'Women Printed Crepe Straight Kurta  (Multicolor)',
                productPrice: 'Rs. 888.00',
                productImg: 'https://cdn.sareeka.com/image/cache/data2018/print-party-party-wear-kurti-94668-1000x1375.jpg'
            },

            {
                id: 36,
                productName: 'Women Embroidered Viscose Rayon A-line Kurta  (Light Blue, Gold)',
                productPrice: 'Rs. 988.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/b/4/s/m-aqua-sleeveless-krishna-creations-original-imagzt2yjygzy6b7.jpeg?q=70'
            },

            {
                id: 37,
                productName: 'Women Embroidered Cotton Blend Straight Kurta  (Pink)',
                productPrice: 'Rs. 989.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/k/u/u/xxl-pinkgreyxxl-ladylaz-original-imag7dn737sny2u9-bb.jpeg?q=70'
            },

            {
                id: 38,
                productName: 'Women Abstract, Printed Viscose Rayon Straight Kurta  (Dark Blue)',
                productPrice: 'Rs. 1000',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/z/u/k/m-midindigoking-made-in-desi-original-imaghmy5fcj4fwcq.jpeg?q=70'
            },

            {
                id: 39,
                productName: 'Women Printed Viscose Rayon Anarkali Kurta  (White, Gold)',
                productPrice: 'Rs. 878.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shopsy-kurta/e/i/b/m-el-01white-goldbutti-aarti-fashion-original-imafvtuppkhyk6tg.jpeg?q=70'
            },

            {
                id: 40,
                productName: 'Women Printed Viscose Rayon Anarkali Kurta  (Maroon)',
                productPrice: 'Rs. 398.00',
                productImg: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/2/8/p/s-dheeraj-01-dheeraj-export-original-imaghs69kmtrezaz.jpeg?q=70'
            }








         
         ]   
 
        }
    }


render() {

    return(
        
        
            <div>
                
        <div className="outer-row">
                {this.state.productList.map((list) => (
                    <div key={list.id} className='productlist'>    
                    <img src={list.productImg} className='one' alt='shirt'/>
                    {list.productName} - {list.productPrice} 
                   
                    </div>
                ))}
                </div>
                
        </div>
      
        
    )
}

}

export default Product