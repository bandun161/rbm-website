import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Board from '@/pages/Board';
import ProductsOverview from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import News from '@/pages/News';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import Calculator from '@/pages/Calculator';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/board" component={Board} />
      <Route path="/products" component={ProductsOverview} />
      <Route path="/products/:slug" component={ProductDetail} />
      <Route path="/news" component={News} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
      <Route path="/calculator" component={Calculator} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;