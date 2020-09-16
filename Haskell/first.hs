-- sum of two numbers
solveMeFirst a b = a + b

main = do
	val1 <- readLn
  val2 <- readLn
  let sum = solveMeFirst val1 val2
  print sum
  
  -- "Hello world"
  hello_world = putStrLn "Hello World"
  
  main = do
  	hello_world
    
  -- "Hello World" 'n' Times
  hello_world n = putStrLn replicate n "Hello World"
  
  main = do
  	n <- readLn :: IO Int
    hello_world n
    
  -- Other "Hello World" 'n' Times
helWorNTim 0 = return ()
helWorNTim n =
  do
    putStrLn "Hello World"
    helWorNTim (n-1)

main = do
  n <- readLn :: IO Int
  helWorNTim n
  
-- repeat each element in the list N amount of times
f :: Int -> [Int] -> [Int]
f n arr = concat [replicate n x | x <- arr] -- Complete this function

-- This part handles the Input and Output and can be used as it is. Do not modify this part.
main :: IO ()
main = getContents >>=
       mapM_ print. (\(n:arr) -> f n arr). map read. words
       

-- Filter a given array of integers and output only those values that are less than a specified value
f :: Int -> [Int] -> [Int]
f n arr = 

main = do
	n <- readLn :: IO Int
  let
  	numbers = map read (lines inputdata) :: [Int]
  putStrLn . unlines $ (map show . f n) numbers