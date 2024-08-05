public class S1 {
    public static void main(String[] args) {
        Solution solution = new Solution();
        
        System.out.println(
            solution.solution("pPoooyY") == true
        );

        System.out.println(
            solution.solution("Pyy") == false
        );
    }
}

class Solution {
    boolean solution(String s) {
        boolean answer = true;
        int pNum = 0;
        int yNum = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == 'p' || c == 'P') {
                pNum +=1;                
            }
            if (c == 'y' || c == 'Y') {
                yNum +=1;                
            }
        }
        if (pNum == yNum) {
            answer = true;
        } else {
            answer = false;
        }
        return answer;
    }
}