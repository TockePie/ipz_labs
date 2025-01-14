package org.example;
/**
 * lab 2 main class
 * @author Maxim Kradozhon
 */

public class Main {
    /**
     * Calls methods of all classes in the package
     * @param args parameters from command line
     */
    public static void main(String[] args) {
        Cl1 cl1 = new Cl1(); cl1.meth1();
        Cl2 cl2 = new Cl2(); cl2.meth1(); cl2.meth2();
        Cl3 cl3 = new Cl3(); cl3.meth1(); cl3.meth3();
    }
}
