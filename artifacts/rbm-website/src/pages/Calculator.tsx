import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator as CalcIcon } from "lucide-react";

export default function Calculator() {
  useEffect(() => {
    document.title = "Calculators | Rural Bank of Madridejos";
    window.scrollTo(0, 0);
  }, []);

  // Loan State
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [loanTerm, setLoanTerm] = useState<number>(12); // months
  const [loanRate, setLoanRate] = useState<number>(1.5); // % per month

  // Savings State
  const [initialDeposit, setInitialDeposit] = useState<number>(10000);
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(2000);
  const [savingsTerm, setSavingsTerm] = useState<number>(5); // years
  const [savingsRate, setSavingsRate] = useState<number>(4.5); // % per annum

  // Calculations
  const monthlyLoanPayment = (loanAmount * (1 + (loanRate/100) * loanTerm)) / loanTerm;
  const totalLoanInterest = (monthlyLoanPayment * loanTerm) - loanAmount;

  // Simple future value calculation for demo
  const futureValue = initialDeposit * Math.pow(1 + (savingsRate/100), savingsTerm) + 
                      monthlyDeposit * 12 * ((Math.pow(1 + (savingsRate/100), savingsTerm) - 1) / (savingsRate/100));
  
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(val);
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />
      
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                <CalcIcon size={32} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Financial Calculators</h1>
              <p className="text-xl text-blue-100">
                Plan your financial future. Estimate your loan payments or project your savings growth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <Tabs defaultValue="loan" className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-14 mb-8 bg-white border border-gray-200 p-1">
                  <TabsTrigger value="loan" className="text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-white rounded-md">Loan Calculator</TabsTrigger>
                  <TabsTrigger value="savings" className="text-base font-bold data-[state=active]:bg-secondary data-[state=active]:text-white rounded-md">Savings Calculator</TabsTrigger>
                </TabsList>
                
                {/* Loan Calculator */}
                <TabsContent value="loan">
                  <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl shadow-gray-200/50">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div>
                          <div className="flex justify-between mb-4">
                            <Label className="text-base font-semibold text-gray-700">Loan Amount</Label>
                            <span className="font-bold text-secondary">{formatCurrency(loanAmount)}</span>
                          </div>
                          <Slider 
                            value={[loanAmount]} 
                            onValueChange={(val) => setLoanAmount(val[0])}
                            max={1000000} 
                            min={10000} 
                            step={10000}
                            className="py-4"
                          />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-4">
                            <Label className="text-base font-semibold text-gray-700">Term (Months)</Label>
                            <span className="font-bold text-secondary">{loanTerm} months</span>
                          </div>
                          <Slider 
                            value={[loanTerm]} 
                            onValueChange={(val) => setLoanTerm(val[0])}
                            max={60} 
                            min={3} 
                            step={3}
                            className="py-4"
                          />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-4">
                            <Label className="text-base font-semibold text-gray-700">Interest Rate (% per month)</Label>
                            <span className="font-bold text-secondary">{loanRate}%</span>
                          </div>
                          <Slider 
                            value={[loanRate]} 
                            onValueChange={(val) => setLoanRate(val[0])}
                            max={5} 
                            min={0.5} 
                            step={0.1}
                            className="py-4"
                          />
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-center">
                        <h3 className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-2 text-center">Estimated Monthly Payment</h3>
                        <div className="text-5xl font-bold text-primary text-center mb-8 pb-8 border-b border-gray-200">
                          {formatCurrency(monthlyLoanPayment)}
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Principal Amount:</span>
                            <span className="font-semibold text-gray-900">{formatCurrency(loanAmount)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Total Interest:</span>
                            <span className="font-semibold text-gray-900">{formatCurrency(totalLoanInterest)}</span>
                          </div>
                          <div className="flex justify-between text-sm pt-4 border-t border-gray-200 font-bold text-secondary">
                            <span>Total Amount Payable:</span>
                            <span>{formatCurrency(loanAmount + totalLoanInterest)}</span>
                          </div>
                        </div>
                        
                        <p className="text-xs text-gray-400 mt-8 text-center italic">
                          * Computation is for estimation purposes only. Actual rates and fees may vary upon application.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Savings Calculator */}
                <TabsContent value="savings">
                  <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl shadow-gray-200/50">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <div>
                          <div className="flex justify-between mb-4">
                            <Label className="text-base font-semibold text-gray-700">Initial Deposit</Label>
                            <span className="font-bold text-secondary">{formatCurrency(initialDeposit)}</span>
                          </div>
                          <Slider 
                            value={[initialDeposit]} 
                            onValueChange={(val) => setInitialDeposit(val[0])}
                            max={500000} 
                            min={1000} 
                            step={1000}
                            className="py-4"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between mb-4">
                            <Label className="text-base font-semibold text-gray-700">Monthly Addition</Label>
                            <span className="font-bold text-secondary">{formatCurrency(monthlyDeposit)}</span>
                          </div>
                          <Slider 
                            value={[monthlyDeposit]} 
                            onValueChange={(val) => setMonthlyDeposit(val[0])}
                            max={50000} 
                            min={0} 
                            step={500}
                            className="py-4"
                          />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-4">
                            <Label className="text-base font-semibold text-gray-700">Term (Years)</Label>
                            <span className="font-bold text-secondary">{savingsTerm} years</span>
                          </div>
                          <Slider 
                            value={[savingsTerm]} 
                            onValueChange={(val) => setSavingsTerm(val[0])}
                            max={30} 
                            min={1} 
                            step={1}
                            className="py-4"
                          />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-4">
                            <Label className="text-base font-semibold text-gray-700">Interest Rate (% p.a.)</Label>
                            <span className="font-bold text-secondary">{savingsRate}%</span>
                          </div>
                          <Slider 
                            value={[savingsRate]} 
                            onValueChange={(val) => setSavingsRate(val[0])}
                            max={10} 
                            min={0.5} 
                            step={0.5}
                            className="py-4"
                          />
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-center">
                        <h3 className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-2 text-center">Projected Future Value</h3>
                        <div className="text-5xl font-bold text-primary text-center mb-8 pb-8 border-b border-gray-200">
                          {formatCurrency(futureValue)}
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Total Contributions:</span>
                            <span className="font-semibold text-gray-900">{formatCurrency(initialDeposit + (monthlyDeposit * 12 * savingsTerm))}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Total Interest Earned:</span>
                            <span className="font-semibold text-accent">{formatCurrency(futureValue - (initialDeposit + (monthlyDeposit * 12 * savingsTerm)))}</span>
                          </div>
                        </div>
                        
                        <p className="text-xs text-gray-400 mt-8 text-center italic">
                          * Computation is for estimation purposes only. Assumes interest is compounded annually and monthly deposits are made at the end of each month. Taxes not included.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}