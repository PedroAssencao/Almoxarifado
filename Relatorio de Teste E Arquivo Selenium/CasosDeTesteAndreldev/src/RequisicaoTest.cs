using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using OpenQA.Selenium.Interactions;

namespace src
{
    public class RequisicaoTest
    {
        //selenium version: 121.0.6167.8500
        //chrome version: 121.0.6167.86
        //openQA verion: 1.2.0
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
        public void CT01CheckarCamposObrigatorios()
        {
            driver.Navigate().GoToUrl("https://andreldev.github.io/Almoxarifado/");
            driver.Manage().Window.Size = new System.Drawing.Size(1360, 720);
            driver.FindElement(By.Id("botaoGravar")).Click();
            Assert.Equal(driver.SwitchTo().Alert().Text, "Preencha todos os campos obrigatórios antes de gravar.");
            driver.Quit();
        }

        [Fact]
        public void CT02InputFicarememverdeaoentrarnocampo()
        {
            driver.Navigate().GoToUrl("https://andreldev.github.io/Almoxarifado/");
            driver.Manage().Window.Size = new System.Drawing.Size(1360, 720);
            driver.FindElement(By.Id("idDepartamento")).Click();
            driver.FindElement(By.Id("departamento")).Click();
            driver.FindElement(By.Id("NomeFuncionario")).Click();
            driver.FindElement(By.CssSelector(".grupo4")).Click();
            driver.FindElement(By.Id("idFuncionario")).Click();
            driver.FindElement(By.Id("cargo")).Click();
            driver.FindElement(By.Id("CodigoProduto")).Click();
            driver.FindElement(By.Id("inpNumero")).Click();
            driver.Quit();
        }

        [Fact]
        public void CT03ValoresInteirosNoCampoID()
        {
            driver.Navigate().GoToUrl("https://andreldev.github.io/Almoxarifado/");
            driver.Manage().Window.Size = new System.Drawing.Size(1360, 720);
            driver.FindElement(By.Id("idDepartamento")).Click();
            driver.FindElement(By.Id("idDepartamento")).SendKeys("11");
            driver.Quit();
        }

        [Fact]
        public void CT04Carregardadosdaapiaoentrarnapagina()
        {
            driver.Navigate().GoToUrl("https://andreldev.github.io/Almoxarifado/");
            driver.Manage().Window.Size = new System.Drawing.Size(1360, 720);
            driver.FindElement(By.Id("categoriaMotivo")).Click();
            driver.FindElement(By.Id("Motivo")).Click();
            driver.FindElement(By.Id("categoriaMotivo")).Click();
            {
                var dropdown = driver.FindElement(By.Id("categoriaMotivo"));
                dropdown.FindElement(By.XPath("//option[. = 'Gestão']")).Click();
            }
            driver.FindElement(By.Id("Motivo")).Click();
            driver.Quit();
        }
        [Fact]
        public void CT05cadamotivoevinculadoaumacategoriamotivo()
        {
            driver.Navigate().GoToUrl("https://andreldev.github.io/Almoxarifado/");
            driver.Manage().Window.Size = new System.Drawing.Size(1360, 720);
            driver.FindElement(By.Id("categoriaMotivo")).Click();
            {
                var dropdown = driver.FindElement(By.Id("categoriaMotivo"));
                dropdown.FindElement(By.XPath("//option[. = 'Gestão']")).Click();
            }
            driver.FindElement(By.Id("Motivo")).Click();
            {
                var dropdown = driver.FindElement(By.Id("Motivo"));
                dropdown.FindElement(By.XPath("//option[. = 'Planejamento']")).Click();
            }
            driver.FindElement(By.Id("categoriaMotivo")).Click();
            {
                var dropdown = driver.FindElement(By.Id("categoriaMotivo"));
                dropdown.FindElement(By.XPath("//option[. = 'Cliente']")).Click();
            }
            driver.FindElement(By.Id("Motivo")).Click();
            {
                var dropdown = driver.FindElement(By.Id("Motivo"));
                dropdown.FindElement(By.XPath("//option[. = 'Quebra de Máquina']")).Click();
            }
            driver.FindElement(By.Id("categoriaMotivo")).Click();
            {
                var dropdown = driver.FindElement(By.Id("categoriaMotivo"));
                dropdown.FindElement(By.XPath("//option[. = 'RP']")).Click();
            }
            driver.FindElement(By.Id("Motivo")).Click();
            driver.FindElement(By.Id("Motivo")).Click();
            driver.Quit();
        }

        [Fact]
        public void CT06AoDigitarumidvalidonocampoidDeveserexibidoodepartamento()
        {
            driver.Navigate().GoToUrl("https://andreldev.github.io/Almoxarifado/");
            driver.Manage().Window.Size = new System.Drawing.Size(1360, 720);
            driver.FindElement(By.Id("idDepartamento")).Click();
            driver.FindElement(By.Id("idDepartamento")).SendKeys("3");
            driver.Quit();
        }

        [Fact]
        public void CT07AoDigitarumidvalidonocampofuncidDeveserexibidooCargoenomedofuncionario()
        {
            driver.Navigate().GoToUrl("https://andreldev.github.io/Almoxarifado/");
            driver.Manage().Window.Size = new System.Drawing.Size(1360, 720);
            driver.FindElement(By.Id("idFuncionario")).Click();
            driver.FindElement(By.Id("idFuncionario")).SendKeys("2");
            driver.FindElement(By.Id("idFuncionario")).Click();
            driver.FindElement(By.Id("idFuncionario")).SendKeys("1");
            driver.FindElement(By.Id("idFuncionario")).Click();
            driver.FindElement(By.Id("idFuncionario")).Click();
            driver.FindElement(By.Id("idFuncionario")).SendKeys("2");
            driver.FindElement(By.Id("idFuncionario")).Click();
            driver.FindElement(By.Id("idFuncionario")).SendKeys("3");
            driver.FindElement(By.Id("idFuncionario")).Click();
            {
                var element = driver.FindElement(By.Id("idFuncionario"));
                Actions builder = new Actions(driver);
                builder.DoubleClick(element).Perform();
            }
            driver.FindElement(By.Id("idFuncionario")).SendKeys("2");
            driver.FindElement(By.Id("idFuncionario")).Click();
            driver.FindElement(By.Id("idFuncionario")).SendKeys("1");
            driver.FindElement(By.Id("idFuncionario")).Click();
            {
                var element = driver.FindElement(By.Id("idFuncionario"));
                Actions builder = new Actions(driver);
                builder.DoubleClick(element).Perform();
            }
            driver.Quit();
        }
        [Fact]
        public void CT08Aodigitarumcodprodutovalidopreencherasinformaes()
        {
            driver.Navigate().GoToUrl("https://andreldev.github.io/Almoxarifado/");
            driver.Manage().Window.Size = new System.Drawing.Size(1360, 720);
            driver.FindElement(By.CssSelector(".linhaAdicionarItens")).Click();
            driver.FindElement(By.Id("CodigoProduto")).Click();
            driver.FindElement(By.Id("CodigoProduto")).SendKeys("10");
            driver.Quit();
        }

        [Fact]
        public void CT09CampoQuantidadeSoliberadoaposescolherumproduto()
        {
            driver.Navigate().GoToUrl("https://andreldev.github.io/Almoxarifado/");
            driver.Manage().Window.Size = new System.Drawing.Size(1360, 720);
            driver.FindElement(By.Id("Quantidade")).Click();
            driver.FindElement(By.Id("Quantidade")).Click();
            {
                var element = driver.FindElement(By.Id("Quantidade"));
                Actions builder = new Actions(driver);
                builder.DoubleClick(element).Perform();
            }
            driver.FindElement(By.Id("Quantidade")).SendKeys("5643453");
            driver.FindElement(By.Id("Quantidade")).SendKeys(Keys.Enter);
            driver.FindElement(By.Id("Quantidade")).SendKeys("asdasd");
            driver.Quit();
        }

        [Fact]
        public void CT10CampoQuantidadeDeveAceitarApenasValroesInteirosMaioresQuezero()
        {
            driver.Navigate().GoToUrl("https://andreldev.github.io/Almoxarifado/");
            driver.Manage().Window.Size = new System.Drawing.Size(1360, 720);
            driver.FindElement(By.Id("Quantidade")).Click();
            driver.FindElement(By.Id("Quantidade")).SendKeys("0");
            driver.Quit();
        }

        [Fact]
        public void CT11BotoGravarAtivarApenasDepoisdeEscolherUmproduto()
        {
            driver.Navigate().GoToUrl("https://andreldev.github.io/Almoxarifado/");
            driver.Manage().Window.Size = new System.Drawing.Size(1360, 720);
            driver.FindElement(By.Id("botaoGravar")).Click();
            Assert.Equal(driver.SwitchTo().Alert().Text, "Preencha todos os campos obrigatórios antes de gravar.");
            driver.Quit();
        }

        [Fact]
        public void CT12RetanguloMudarAcorConformeEstoqueMinimo()
        {
            driver.Navigate().GoToUrl("https://andreldev.github.io/Almoxarifado/");
            driver.Manage().Window.Size = new System.Drawing.Size(1360, 720);
            driver.FindElement(By.Id("CodigoProduto")).Click();
            driver.FindElement(By.CssSelector("body")).Click();
            driver.FindElement(By.CssSelector("body")).Click();
            driver.FindElement(By.Id("CodigoProduto")).SendKeys("20");
            driver.FindElement(By.Id("StatusEstoque")).Click();
            driver.FindElement(By.CssSelector("body")).Click();
            driver.FindElement(By.Id("CodigoProduto")).SendKeys("40");
            driver.Quit();
        }









    }
}