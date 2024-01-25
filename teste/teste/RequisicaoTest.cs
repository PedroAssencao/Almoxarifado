using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace teste
{
    public class RequisicaoTest
    {

        public IWebDriver driver { get; private set; }
        public IDictionary<string, object> vars { get; private set; }
        public IJavaScriptExecutor js { get; private set; }

        public RequisicaoTest()
        {
            driver = new ChromeDriver();
            js = (IJavaScriptExecutor)driver;
            vars = new Dictionary<string, object>();
        }

        [Fact]
        public void CT01REQUISICAOCOMDEPARTAMENTO10()
        {
            driver.Navigate().GoToUrl("https://splendorous-starlight-c2b50a.netlify.app/");
            driver.Manage().Window.Size = new System.Drawing.Size(1050, 832);
            driver.FindElement(By.Id("IdDepartamento")).Click();
            driver.FindElement(By.Id("IdDepartamento")).SendKeys("10");
            Thread.Sleep(3000);
            var resultado = driver.FindElement(By.Id("departamentos")).GetAttribute("value");

        }


        [Theory]
        [InlineData("10", "Sec. Educacao")]
        [InlineData("40", "NAT")]
        public void CT01Requisicaocampodepartamento(string idDep, string esperado)
        {
            driver.Navigate().GoToUrl("https://splendorous-starlight-c2b50a.netlify.app/");
            driver.Manage().Window.Size = new System.Drawing.Size(1050, 832);
            driver.FindElement(By.Id("IdDepartamento")).Click();
            driver.FindElement(By.Id("IdDepartamento")).SendKeys(idDep);
            var resultado = driver.FindElement(By.Id("departamentos")).GetAttribute("value");
            string veDepartamento = esperado;
            driver.Quit();
            Assert.Equal(resultado, veDepartamento);
        }

  [Theory]
   [InlineData("20")]
   [InlineData("20")]
   public void CT03R3RequisicaoQtdItem(string valorEsperado)
   {
       driver.Navigate().GoToUrl("https://splendorous-starlight-c2b50a.netlify.app/");
       driver.Manage().Window.Size = new System.Drawing.Size(1936, 1048);
       driver.FindElement(By.Id("CodigoProduto")).Click();
       driver.FindElement(By.Id("CodigoProduto")).SendKeys("1");
       driver.FindElement(By.Id("Quantidade")).Click();
       driver.FindElement(By.Id("Quantidade")).SendKeys(valorEsperado);
       driver.FindElement(By.CssSelector("#BtnInserirItens > span")).Click();
       Thread.Sleep(3000);
       IWebElement tabela = driver.FindElement(By.Id("tabelaItens"));
       IWebElement celula = tabela.FindElement(By.XPath(".//tr[1]/td[3]"));
       string valorEncontrado = celula.Text;
       driver.Quit();

       Assert.Equal(valorEsperado,valorEncontrado);
   }

    }
}