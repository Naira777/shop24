import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import BrandsPage from "./pages/BrandsPage";
import BreadandCakesPage from "./pages/BreadandCakesPage";
import CategoryPage from "./pages/CategoryPage";
import BrandProductPage from "./pages/BrandProductPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/brands/:filtertype" element={<BrandProductPage />} />

        <Route path="/" element={<CategoryPage />} />

        <Route path="/:filtertype" element={<BreadandCakesPage />} >
          <Route path=":filtertype" element={<BreadandCakesPage />} />
        </Route>

        <Route path="/panir"  >
          <Route path=":filtertype"  />
        </Route>

        <Route path="/mis"  >
          <Route path=":filtertype" />
        </Route>

        <Route path="/mis"  >
          <Route path=":filtertype" />
        </Route>
     

      <Route path="/drink" >
        <Route path=":filtertype"  />
      </Route>

      <Route path="/sausage" >
        <Route path=":filtertype" />
      </Route>

      <Route path="/fruit"  >
        <Route path=":filtertype"  />
      </Route>

      <Route path="/grocery"  >
        <Route path=":filtertype" />
      </Route>

      <Route path="/coffee"  >
        <Route path=":filtertype"  />
      </Route>

      <Route path="/alcohol"  >
        <Route path=":filtertype"  />
      </Route>

      <Route path="/snack"  >
        <Route path=":filtertype"  />
      </Route>

      <Route path="/evilss" >
        <Route path=":filtertype"  />
      </Route>

      <Route path="/preserved"  >
        <Route path=":filtertype"  />
      </Route>

      <Route path="/egg"  >
        <Route path=":filtertype"  />
      </Route>

      <Route path="/sweet"  >
        <Route path=":filtertype" />
      </Route>

      <Route path="/fastfood"  >
        <Route path=":filtertype"  />
      </Route>

      <Route path="/frozzen"  >
        <Route path=":filtertype"  />
      </Route>

      <Route path="/after_eat"  >
        <Route path=":filtertype" />
      </Route>

      <Route path="/cigarette"  >
        <Route path=":filtertype"  />
      </Route>

    </Routes>
      
    </BrowserRouter >
  );
}

export default App;
