package org.example;

public class Main {
    /**
     * Calls methods of all classes in the package
     * @param args parameters from command line
     */
    public static void main(String[] args) {
        Cl1 cl1 = new Cl1(); cl1.meth1(); cl1.meth2(); cl1.meth3();
        Cl2 cl2 = new Cl2(); cl2.meth2();
        Cl3 cl3 = new Cl3(); cl3.meth3();
    }
}