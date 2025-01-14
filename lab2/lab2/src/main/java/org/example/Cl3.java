package org.example;

/**
 * Class Cl3 implements interface If3, extends CL2,
 * consists of field of Cl1`s type,
 * methods that allow to print information about class and method in the console
 * @author Maxim Kradozhon
 */

public class Cl3 extends Cl2 implements If3 {
    /**
     * Field of CL3`s type
     */
    Cl3 cl3;
    /**
     * Method that prints information about class and method in the console
     */
    @Override
    public void meth1() {
        System.out.println("Cl3 meth1");
    }
    /**
     * Method that prints information about class and method in the console
     */
    public void meth3() {
        System.out.println("Cl3 meth3");
    }
}
