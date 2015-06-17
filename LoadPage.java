package br.mb.tutorialCapturaPaginaWeb;
 
import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
 
public class LoadPage {
    public void getPage(URL url, File file) throws IOException {
        BufferedReader in =
                new BufferedReader(new InputStreamReader(url.openStream()));
 
         BufferedWriter out = new BufferedWriter(new FileWriter(file));
 
        String inputLine;
 
        while ((inputLine = in.readLine()) != null) {
            // Imprime página no console
            System.out.println(inputLine);
            // Grava pagina no arquivo
            out.write(inputLine);
            out.newLine();
        }
 
        in.close();
        out.flush();
        out.close();
    }
 
    public void save(id) {
        
        URL url = null;
        File file = new File("C:\\TutorialArquivos\\"+id);
        try {
            url = new URL("http://eztvapi.re/show/"+id);
            new LoadPage().getPage(url, file);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    public static void main(String[] args) {

    }
}