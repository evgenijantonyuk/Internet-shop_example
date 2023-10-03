import {Route, Routes} from "react-router-dom";
import {ProductsPage} from "./pages/ProductsPage";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./components/Navigation";
import {TitleShop} from "./components/TitleShop";

function App() {
    return (
        <div>
            <TitleShop />
            <Navigation/>
            <Routes>
                <Route path="/" element={<ProductsPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </div>
    )
}
  //   const { loading, error, products, addProduct} = useProducts()
  //   const {modal, open, close} = useContext(ModalContext)
  //
  //   // const [ modal, setModal ] = useState(false)
  //
  //   const createHandler = (product: IProduct) => {
  //       close()
  //       addProduct(product)
  //   }
  //
  // return (
  //        <div className="container mx-auto max-w-2xl pt-5">
  //           <h1 className="font-bold mb-9 text-center text-2xl">Internet Shop</h1>
  //            { loading && <Loader />}
  //            { error && <ErrorMessage error={error} />}
  //
  //            { products.map( product => <Product product={product} key={product.id}/> ) }
  //
  //            { modal && <Modal title="Create new product" onClose={ close }>
  //                <CreateProduct onCreate={createHandler}/>
  //            </Modal> }
  //
  //            <button
  //                className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
  //            onClick={ open }
  //            >
  //                +
  //            </button>
  //
  //            {/*<Product product={ products[0] } />*/}
  //            {/*<Product product={ products[1] } />*/}
  //            {/*<Product product={ products[2] } />*/}
  //        </div>
  //
  // )

export default App;
