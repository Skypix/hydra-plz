import {NavLink} from '@remix-run/react';
import {useRootLoaderData} from '~/root';
import {Await, useLoaderData, Link} from '@remix-run/react';


/**
 * @param {FooterQuery & {shop: HeaderQuery['shop']}}
 */
export function Footer({menu, shop}) {
  return (
   

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
              <Link to="/"  className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/images/hydra_logo_hq.svg" className="h-8" alt="HYDRA" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hydra</span>
              </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
               <li> 
                
                  <Link to={"/pages/catalog"} className="hover:underline me-4 md:me-6">Catalog</Link> 
                  
                </li>
                
                <li>
                  <Link to={"/pages/policies"} className="hover:underline me-4 md:me-6">Policies</Link>
                </li>
                <li>
                  <Link to={"/pages/athletes"} className="hover:underline me-4 md:me-6">Athletes</Link>
                </li>
                <li>
                  <Link to={"/pages/contact"} className="hover:underline me-4 md:me-6">Contact</Link> 
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.instagram.com/hydra_athletes/?img_index=1" className="hover:underline">Hydra</a>. All Rights Reserved.</span>
    </div>

    </footer>
  );
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
 * }}
 */

function FooterMenu() {

  return (
    <div className='
    justify-self-center self-center grid justify-center content-center'>   
    <div className='flex flex-nowrap items-center justify-center bg-white cursor-pointer'>
      <img src="images/icon-ig.svg" onClick={() => {window.open("https://www.instagram.com/hydra_athletes/?img_index=1",'_blank')}} />
      
    </div>
      
    </div>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
