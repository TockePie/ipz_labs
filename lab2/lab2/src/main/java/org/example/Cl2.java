package org.example;

/**
 * Class Cl2 implements interface If2,
 * consists of field of If1`s type,
 * methods that allow to print information about class and method in the console
 * @author Maxim Kradozhon
 */

public class Cl2 implements If2 {
    /**
     * Field of Cl3`s type
     */
    Cl3 cl3;
    /**
     * Method that prints information about class and method in the console
     */
    public void meth1() {
        System.out.println("Cl2 meth1");
    }
    /**
     * Method that prints information about class and method in the console
     */
    @Override
    public void meth2() {
        System.out.println("Cl2 meth2");
    }
}
